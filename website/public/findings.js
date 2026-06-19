/* ===========================================
   THE FINDINGS — data-driven chart module
   Loads JSON from data/, renders SVG charts.
   No external dependencies.
   =========================================== */

(function () {
  'use strict';

  const DIMENSIONS = [
    'cognitive', 'epistemic', 'vocational', 'identity',
    'differential', 'judgment', 'temporal', 'economic', 'ethical'
  ];

  const FAMILY_CODE = {
    practitioner: 'F1',
    practice: 'F2',
    conditions: 'F3'
  };

  const FAMILY_LABEL = {
    practitioner: 'Practitioner',
    practice: 'Practice',
    conditions: 'Conditions'
  };

  const CADENCE_LABEL = {
    'weekly': 'Weekly',
    'monthly': 'Monthly',
    'quarterly': 'Quarterly',
    'annual': 'Annual',
    'per-session': 'Per Session',
    'per-release': 'Per Release',
    'daily': 'Daily'
  };

  const SOURCE_LABEL = {
    'auto': 'Auto',
    'asked': 'Asked'
  };

  const STACK_PALETTE = ['#3a5a7a', '#5a7a9a', '#7a9aba', '#9abada', '#bacdda'];

  let state = {
    data: null,
    showCohort: false,
    filters: { source: 'all', cadence: 'all', status: 'all' }
  };

  // ---------- data loading ----------

  async function loadAllData() {
    try {
      // Fetch findings.json first to learn the deployed schema version.
      // findings.json should be invalidated on every deploy (CloudFront single-file invalidation).
      // The version inside it then cache-busts all other JSON via query string,
      // so per-dimension files can be cached aggressively.
      const config = await fetch('data/findings.json', { cache: 'no-cache' }).then(r => r.json());
      const version = (config.schema && config.schema.version) || '1';
      const v = `?v=${encodeURIComponent(version)}`;
      const [eventsDoc, ...dimDocs] = await Promise.all([
        fetch(`data/events.json${v}`).then(r => r.json()),
        ...DIMENSIONS.map(d => fetch(`data/${d}.json${v}`).then(r => r.json()))
      ]);
      const dimensions = {};
      DIMENSIONS.forEach((id, i) => { dimensions[id] = dimDocs[i]; });
      return { config, events: eventsDoc.events || [], dimensions };
    } catch (err) {
      console.error('Failed to load findings data:', err);
      return null;
    }
  }

  // ---------- helpers ----------

  function toNode(c) {
    if (c == null) return null;
    if (c instanceof Node) return c;
    return document.createTextNode(String(c));
  }

  function el(tag, attrs, children) {
    const e = document.createElement(tag);
    if (attrs) {
      for (const k in attrs) {
        if (k === 'className') e.className = attrs[k];
        else if (k === 'dataset') Object.assign(e.dataset, attrs[k]);
        else if (k === 'onclick') e.addEventListener('click', attrs[k]);
        else if (k === 'onchange') e.addEventListener('change', attrs[k]);
        else e.setAttribute(k, attrs[k]);
      }
    }
    if (children) {
      (Array.isArray(children) ? children : [children]).forEach(c => {
        const node = toNode(c);
        if (node) e.appendChild(node);
      });
    }
    return e;
  }

  function svg(tag, attrs, children) {
    const e = document.createElementNS('http://www.w3.org/2000/svg', tag);
    if (attrs) for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (children) {
      (Array.isArray(children) ? children : [children]).forEach(c => {
        const node = toNode(c);
        if (node) e.appendChild(node);
      });
    }
    return e;
  }

  function parseDate(s) { return Date.parse(s); }
  function fmtDate(t) {
    const d = new Date(t);
    return d.toISOString().slice(0, 10);
  }
  function fmtMonth(t) {
    const d = new Date(t);
    return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }

  function getXDomain(m, includeCohort) {
    const dates = [];
    m.series.forEach(s => s.data.forEach(d => dates.push(parseDate(d.t))));
    if (includeCohort && m.cohort) {
      m.cohort.forEach(s => s.data.forEach(d => dates.push(parseDate(d.t))));
    }
    if (m.referenceLines) {
      m.referenceLines.forEach(rl => {
        if (rl.series) rl.series.forEach(d => dates.push(parseDate(d.t)));
      });
    }
    if (dates.length === 0) return null;
    return [Math.min(...dates), Math.max(...dates)];
  }

  function getYDomain(m, includeCohort) {
    const values = [];
    m.series.forEach(s => s.data.forEach(d => values.push(d.v)));
    if (includeCohort && m.cohort) {
      m.cohort.forEach(s => s.data.forEach(d => values.push(d.v)));
    }
    if (m.referenceLines) {
      m.referenceLines.forEach(rl => {
        if (typeof rl.value === 'number') values.push(rl.value);
        if (rl.series) rl.series.forEach(d => values.push(d.v));
      });
    }
    const explicit = m.yDomain || [null, null];
    const min = explicit[0] != null ? explicit[0] : (values.length ? Math.min(0, ...values) : 0);
    let max = explicit[1] != null ? explicit[1] : (values.length ? Math.max(...values) * 1.1 : 100);
    if (max === min) max = min + 1;
    return [min, max];
  }

  function scaleX(t, dom, w, pad) {
    const span = dom[1] - dom[0] || 1;
    return pad.left + ((t - dom[0]) / span) * (w - pad.left - pad.right);
  }

  function scaleY(v, dom, h, pad) {
    const span = dom[1] - dom[0] || 1;
    return pad.top + (1 - (v - dom[0]) / span) * (h - pad.top - pad.bottom);
  }

  // ---------- chart renderers ----------

  function renderEventAnnotations(root, opts, xDom, w, h, pad) {
    if (!opts || !opts.events || !opts.events.length || !xDom) return;
    const dimId = opts.dimId;
    opts.events.forEach(evt => {
      const affects = evt.affects;
      const matchesDim = affects === 'all' ||
        (Array.isArray(affects) && (affects.includes(dimId) || affects.includes('all')));
      if (!matchesDim) return;
      const t = parseDate(evt.t);
      if (isNaN(t) || t < xDom[0] || t > xDom[1]) return;
      const x = scaleX(t, xDom, w, pad);
      root.appendChild(svg('line', {
        x1: x, y1: pad.top, x2: x, y2: h - pad.bottom,
        class: `chart-event-line chart-event-${evt.kind}`
      }));
      root.appendChild(svg('circle', {
        cx: x, cy: pad.top, r: 2,
        class: `chart-event-marker chart-event-${evt.kind}`
      }));
    });
  }

  function chartFrame(width, height, opts) {
    const pad = opts.pad;
    const root = svg('svg', {
      viewBox: `0 0 ${width} ${height}`,
      preserveAspectRatio: 'none',
      class: 'chart-svg'
    });
    // baseline
    root.appendChild(svg('line', {
      x1: pad.left, y1: height - pad.bottom,
      x2: width - pad.right, y2: height - pad.bottom,
      class: 'chart-axis'
    }));
    // left axis
    if (opts.showYAxis) {
      root.appendChild(svg('line', {
        x1: pad.left, y1: pad.top,
        x2: pad.left, y2: height - pad.bottom,
        class: 'chart-axis-y'
      }));
    }
    return root;
  }

  function renderLineChart(m, opts) {
    const w = opts.width, h = opts.height;
    const pad = opts.pad;
    const showCohort = opts.showCohort && m.cohort;
    const xDom = getXDomain(m, showCohort);
    const yDom = getYDomain(m, showCohort);
    const root = chartFrame(w, h, opts);

    if (!xDom || m.series[0].data.length === 0) {
      root.appendChild(svg('text', {
        x: w / 2, y: h / 2 + 4, 'text-anchor': 'middle', class: 'chart-empty'
      }, 'No readings yet'));
      return root;
    }

    // Y-axis ticks
    if (opts.showYAxis) {
      const ticks = [yDom[0], (yDom[0] + yDom[1]) / 2, yDom[1]];
      ticks.forEach(v => {
        const y = scaleY(v, yDom, h, pad);
        root.appendChild(svg('text', {
          x: pad.left - 4, y: y + 3, 'text-anchor': 'end', class: 'chart-tick'
        }, formatTickLabel(v, m.unit)));
      });
    }

    // Reference lines
    if (m.referenceLines) {
      m.referenceLines.forEach(rl => {
        if (typeof rl.value === 'number') {
          const y = scaleY(rl.value, yDom, h, pad);
          root.appendChild(svg('line', {
            x1: pad.left, y1: y, x2: w - pad.right, y2: y, class: 'chart-ref-line'
          }));
          if (opts.showLegend) {
            root.appendChild(svg('text', {
              x: w - pad.right, y: y - 3, 'text-anchor': 'end', class: 'chart-ref-label'
            }, rl.label));
          }
        }
      });
    }

    // Cohort line (if shown)
    if (showCohort) {
      m.cohort.forEach(s => {
        if (s.data.length > 1) {
          const pts = s.data.map(d =>
            `${scaleX(parseDate(d.t), xDom, w, pad)},${scaleY(d.v, yDom, h, pad)}`
          ).join(' ');
          root.appendChild(svg('polyline', {
            points: pts, class: 'chart-line chart-line-cohort'
          }));
        }
      });
    }

    // Main series
    const series = m.series[0];
    if (series.data.length > 1) {
      const pts = series.data.map(d =>
        `${scaleX(parseDate(d.t), xDom, w, pad)},${scaleY(d.v, yDom, h, pad)}`
      ).join(' ');
      const lineClass = `chart-line chart-line-me ${m.direction ? 'dir-' + m.direction : ''}`;
      root.appendChild(svg('polyline', { points: pts, class: lineClass }));
    }
    // Last dot
    if (series.data.length > 0) {
      const last = series.data[series.data.length - 1];
      root.appendChild(svg('circle', {
        cx: scaleX(parseDate(last.t), xDom, w, pad),
        cy: scaleY(last.v, yDom, h, pad),
        r: opts.mode === 'headline' ? 3 : 2.5,
        class: `chart-dot ${m.direction ? 'dir-' + m.direction : ''}`
      }));
    }

    renderEventAnnotations(root, opts, xDom, w, h, pad);
    return root;
  }

  function renderDualLineChart(m, opts) {
    const w = opts.width, h = opts.height;
    const pad = opts.pad;
    const xDom = getXDomain(m, false);
    const yDom = getYDomain(m, false);
    const root = chartFrame(w, h, opts);

    if (!xDom) {
      root.appendChild(svg('text', {
        x: w / 2, y: h / 2 + 4, 'text-anchor': 'middle', class: 'chart-empty'
      }, 'No readings yet'));
      return root;
    }

    // Y-axis ticks
    if (opts.showYAxis) {
      const ticks = [yDom[0], (yDom[0] + yDom[1]) / 2, yDom[1]];
      ticks.forEach(v => {
        const y = scaleY(v, yDom, h, pad);
        root.appendChild(svg('text', {
          x: pad.left - 4, y: y + 3, 'text-anchor': 'end', class: 'chart-tick'
        }, formatTickLabel(v, m.unit)));
      });
    }

    m.series.forEach((s, i) => {
      if (s.data.length > 1) {
        const pts = s.data.map(d =>
          `${scaleX(parseDate(d.t), xDom, w, pad)},${scaleY(d.v, yDom, h, pad)}`
        ).join(' ');
        root.appendChild(svg('polyline', {
          points: pts, class: `chart-line chart-line-multi`, style: `stroke: ${STACK_PALETTE[i % STACK_PALETTE.length]}`
        }));
      } else if (s.data.length === 1) {
        const d = s.data[0];
        root.appendChild(svg('circle', {
          cx: scaleX(parseDate(d.t), xDom, w, pad),
          cy: scaleY(d.v, yDom, h, pad),
          r: 3,
          class: 'chart-dot',
          style: `fill: ${STACK_PALETTE[i % STACK_PALETTE.length]}`
        }));
      }
    });

    renderEventAnnotations(root, opts, xDom, w, h, pad);
    return root;
  }

  function renderStackedArea(m, opts) {
    const w = opts.width, h = opts.height;
    const pad = opts.pad;
    const xDom = getXDomain(m, false);
    const root = chartFrame(w, h, opts);

    if (!xDom) {
      root.appendChild(svg('text', {
        x: w / 2, y: h / 2 + 4, 'text-anchor': 'middle', class: 'chart-empty'
      }, 'No readings yet'));
      return root;
    }

    // Build per-timestamp cumulative values
    const allDates = [...new Set(m.series.flatMap(s => s.data.map(d => d.t)))].sort();
    const seriesCount = m.series.length;
    const yDom = [0, m.yDomain && m.yDomain[1] ? m.yDomain[1] : 100];

    // Y-axis ticks
    if (opts.showYAxis) {
      [0, 50, 100].forEach(v => {
        const y = scaleY(v, yDom, h, pad);
        root.appendChild(svg('text', {
          x: pad.left - 4, y: y + 3, 'text-anchor': 'end', class: 'chart-tick'
        }, v + '%'));
      });
    }

    // Build cumulative stack from bottom up
    const cumulative = allDates.map(t => {
      const vals = m.series.map(s => {
        const pt = s.data.find(d => d.t === t);
        return pt ? pt.v : 0;
      });
      return { t, vals };
    });

    // Render each band as a closed path
    for (let i = seriesCount - 1; i >= 0; i--) {
      let upperPath = '';
      let lowerPath = '';
      cumulative.forEach((row, idx) => {
        const upper = row.vals.slice(0, i + 1).reduce((a, b) => a + b, 0);
        const lower = row.vals.slice(0, i).reduce((a, b) => a + b, 0);
        const x = scaleX(parseDate(row.t), xDom, w, pad);
        upperPath += `${idx === 0 ? 'M' : 'L'}${x},${scaleY(upper, yDom, h, pad)} `;
        lowerPath = `L${x},${scaleY(lower, yDom, h, pad)} ` + lowerPath;
      });
      const d = upperPath + lowerPath + 'Z';
      root.appendChild(svg('path', {
        d, class: 'chart-area',
        style: `fill: ${STACK_PALETTE[i % STACK_PALETTE.length]}`
      }));
    }

    renderEventAnnotations(root, opts, xDom, w, h, pad);
    return root;
  }

  function renderStepChart(m, opts) {
    const w = opts.width, h = opts.height;
    const pad = opts.pad;
    const xDom = getXDomain(m, false);
    const yDom = getYDomain(m, false);
    const root = chartFrame(w, h, opts);

    if (!xDom) {
      root.appendChild(svg('text', {
        x: w / 2, y: h / 2 + 4, 'text-anchor': 'middle', class: 'chart-empty'
      }, 'No readings yet'));
      return root;
    }

    if (opts.showYAxis) {
      const ticks = [yDom[0], (yDom[0] + yDom[1]) / 2, yDom[1]];
      ticks.forEach(v => {
        const y = scaleY(v, yDom, h, pad);
        root.appendChild(svg('text', {
          x: pad.left - 4, y: y + 3, 'text-anchor': 'end', class: 'chart-tick'
        }, formatTickLabel(v, m.unit)));
      });
    }

    // Reference line (practitioner's locked score)
    if (m.referenceLines) {
      m.referenceLines.forEach(rl => {
        if (typeof rl.value === 'number') {
          const y = scaleY(rl.value, yDom, h, pad);
          root.appendChild(svg('line', {
            x1: pad.left, y1: y, x2: w - pad.right, y2: y, class: 'chart-ref-line'
          }));
          if (opts.showLegend) {
            root.appendChild(svg('text', {
              x: w - pad.right - 4, y: y - 4, 'text-anchor': 'end', class: 'chart-ref-label'
            }, rl.label));
          }
        }
      });
    }

    // Build step path
    const series = m.series[0];
    if (series.data.length > 0) {
      let stepPath = '';
      series.data.forEach((d, i) => {
        const x = scaleX(parseDate(d.t), xDom, w, pad);
        const y = scaleY(d.v, yDom, h, pad);
        if (i === 0) {
          stepPath += `M${x},${y} `;
        } else {
          const prevY = scaleY(series.data[i - 1].v, yDom, h, pad);
          stepPath += `L${x},${prevY} L${x},${y} `;
        }
      });
      // Extend to right edge
      const last = series.data[series.data.length - 1];
      stepPath += `L${w - pad.right},${scaleY(last.v, yDom, h, pad)}`;
      root.appendChild(svg('path', { d: stepPath, class: 'chart-line chart-line-step' }));

      // Dots at each release
      series.data.forEach(d => {
        root.appendChild(svg('circle', {
          cx: scaleX(parseDate(d.t), xDom, w, pad),
          cy: scaleY(d.v, yDom, h, pad),
          r: 3,
          class: 'chart-dot'
        }));
      });
    }

    renderEventAnnotations(root, opts, xDom, w, h, pad);
    return root;
  }

  function renderScatter(m, opts) {
    const w = opts.width, h = opts.height;
    const pad = opts.pad;
    const xDom = getXDomain(m, false);
    const root = chartFrame(w, h, opts);

    if (!xDom) {
      root.appendChild(svg('text', {
        x: w / 2, y: h / 2 + 4, 'text-anchor': 'middle', class: 'chart-empty'
      }, 'No readings yet'));
      return root;
    }

    // Y is series category (each series gets its own row)
    const categories = m.series.length;
    const rowHeight = (h - pad.top - pad.bottom) / Math.max(categories, 1);

    m.series.forEach((s, i) => {
      const rowY = pad.top + (i + 0.5) * rowHeight;
      // category label
      root.appendChild(svg('text', {
        x: pad.left - 4, y: rowY + 3, 'text-anchor': 'end', class: 'chart-cat-label'
      }, s.label));
      // points
      s.data.forEach(d => {
        const x = scaleX(parseDate(d.t), xDom, w, pad);
        root.appendChild(svg('circle', {
          cx: x, cy: rowY, r: 3 + (d.v - 1) * 1.5,
          class: 'chart-scatter-dot',
          style: `fill: ${STACK_PALETTE[i % STACK_PALETTE.length]}`
        }));
      });
    });

    renderEventAnnotations(root, opts, xDom, w, h, pad);
    return root;
  }

  function renderAnnotatedTimeline(m, opts) {
    const w = opts.width, h = opts.height;
    const pad = opts.pad;
    const root = chartFrame(w, h, opts);

    const series = m.series[0];
    if (!series || series.data.length === 0) {
      root.appendChild(svg('text', {
        x: w / 2, y: h / 2 + 4, 'text-anchor': 'middle', class: 'chart-empty'
      }, 'Awaiting first reading'));
      return root;
    }

    const xDom = getXDomain(m, false);
    const midY = pad.top + (h - pad.top - pad.bottom) / 2;

    series.data.forEach(d => {
      const x = scaleX(parseDate(d.t), xDom, w, pad);
      root.appendChild(svg('rect', {
        x: x - 2, y: midY - 8, width: 4, height: 16,
        class: 'chart-timeline-marker'
      }));
      root.appendChild(svg('text', {
        x, y: midY + 22, 'text-anchor': 'middle', class: 'chart-tick'
      }, fmtMonth(parseDate(d.t))));
    });

    renderEventAnnotations(root, opts, xDom, w, h, pad);
    return root;
  }

  function formatTickLabel(v, unit) {
    if (unit === '%') return Math.round(v) + '%';
    if (unit === '$') return '$' + Math.round(v);
    if (unit === 'index') return String(Math.round(v));
    if (unit === 'score') return String(Math.round(v));
    if (unit === 'minutes') return Math.round(v) + 'm';
    if (unit === 'hours') return Math.round(v) + 'h';
    if (unit === 'rating') return v.toFixed(1);
    if (unit === 'sentiment') return v.toFixed(1);
    if (unit === 'count' || unit === 'rate' || unit === 'mentions' ||
        unit === 'publications' || unit === 'events') {
      return Number.isInteger(v) ? v.toString() : v.toFixed(1);
    }
    return Number.isInteger(v) ? v.toString() : v.toFixed(1);
  }

  function renderChart(m, opts) {
    const dispatch = {
      'line': renderLineChart,
      'stacked-area': renderStackedArea,
      'dual-line': renderDualLineChart,
      'step': renderStepChart,
      'scatter': renderScatter,
      'annotated-timeline': renderAnnotatedTimeline
    };
    const fn = dispatch[m.chart] || renderLineChart;
    return fn(m, opts);
  }

  // ---------- structural renderers ----------

  function renderFilterBar(data) {
    const bar = el('div', { id: 'filter-bar', className: 'filter-bar' });

    function filterGroup(label, key, opts) {
      const group = el('div', { className: 'filter-group' }, [
        el('span', { className: 'filter-label' }, label)
      ]);
      opts.forEach(o => {
        const btn = el('button', {
          className: 'filter-pill',
          dataset: { key, value: o.value, active: o.value === 'all' ? 'true' : 'false' },
          onclick: () => setFilter(key, o.value)
        }, o.label);
        group.appendChild(btn);
      });
      return group;
    }

    bar.appendChild(filterGroup('Source', 'source', [
      { value: 'all', label: 'All' },
      { value: 'auto', label: 'Auto' },
      { value: 'asked', label: 'Asked' }
    ]));
    bar.appendChild(filterGroup('Cadence', 'cadence', [
      { value: 'all', label: 'All' },
      { value: 'weekly', label: 'Weekly' },
      { value: 'monthly', label: 'Monthly' },
      { value: 'quarterly', label: 'Quarterly' },
      { value: 'annual', label: 'Annual' },
      { value: 'per-release', label: 'Per Release' }
    ]));
    bar.appendChild(filterGroup('Status', 'status', [
      { value: 'all', label: 'All' },
      { value: 'live', label: 'Live' },
      { value: 'instrumented', label: 'Instrumented' },
      { value: 'pending', label: 'Pending' }
    ]));

    // Me / Cohort toggle (separate visual treatment)
    const cohortToggle = el('div', { className: 'filter-group filter-group-cohort' }, [
      el('span', { className: 'filter-label' }, 'View'),
      el('button', {
        className: 'filter-pill',
        dataset: { active: 'true' },
        onclick: () => setCohortMode(false)
      }, 'Me'),
      el('button', {
        className: 'filter-pill',
        dataset: { active: 'false' },
        onclick: () => setCohortMode(true)
      }, 'Me + Cohort')
    ]);
    bar.appendChild(cohortToggle);

    return bar;
  }

  function renderDimensionGrid(data) {
    const grid = el('div', { id: 'dimension-grid', className: 'dimension-grid' });
    let panelIndex = 0;
    data.config.families.forEach(fam => {
      fam.dimensions.forEach(dimId => {
        panelIndex++;
        const dim = data.dimensions[dimId];
        grid.appendChild(renderDimensionPanel(dim, fam, panelIndex));
      });
    });
    return grid;
  }

  function renderDimensionPanel(dim, family, idx) {
    const panel = el('section', {
      className: 'dim-panel',
      dataset: { family: family.id, dim: dim.id }
    });

    const code = `${FAMILY_CODE[family.id]}·${String(idx).padStart(2, '0')}`;

    panel.appendChild(el('header', { className: 'dim-header' }, [
      el('div', { className: 'dim-meta' }, [
        el('span', { className: 'dim-family' }, FAMILY_LABEL[family.id]),
        el('span', { className: 'dim-code' }, code),
        el('span', { className: 'dim-status' }, getStatusBadge(dim))
      ]),
      el('h3', { className: 'dim-title' }, dim.title),
      el('p', { className: 'dim-summary' }, dim.question)
    ]));

    // Headline chart
    const headline = dim.measurements.find(m => m.id === dim.headlineMeasurementId)
                     || dim.measurements[0];
    const headlineWrap = el('div', { className: 'dim-headline' });
    headlineWrap.appendChild(el('div', { className: 'headline-question' }, headline.question));
    headlineWrap.appendChild(renderMeasurementLabel(headline));
    const headlineChartWrap = el('div', { className: 'headline-chart' });
    const headlineChart = renderChart(headline, {
      width: 600, height: 150,
      pad: { top: 12, right: 24, bottom: 24, left: 48 },
      mode: 'headline',
      showCohort: state.showCohort,
      showYAxis: true,
      showLegend: true,
      dimId: dim.id,
      events: state.data ? state.data.events : []
    });
    headlineChartWrap.appendChild(headlineChart);
    headlineWrap.appendChild(headlineChartWrap);

    // Headline reading
    if (dim.reading && dim.reading.text) {
      headlineWrap.appendChild(el('div', {
        className: `dim-reading ${headline.direction === 'unfavorable' ? 'is-unfavorable' : ''}`
      }, [
        el('span', { className: 'reading-label' },
          `${dim.reading.asOf || 'Current'} reading${headline.direction === 'unfavorable' ? ' · UNFAVORABLE' : ''}`),
        document.createTextNode(dim.reading.text)
      ]));
    }
    panel.appendChild(headlineWrap);

    // Measurement grid (everything except headline)
    const others = dim.measurements.filter(m => m.id !== headline.id);
    if (others.length > 0) {
      const measGrid = el('div', { className: 'measurement-grid' });
      others.forEach(m => measGrid.appendChild(renderMeasurementCard(m, dim.id)));
      panel.appendChild(measGrid);
    }

    // Field link
    if (dim.fieldLink) {
      panel.appendChild(el('div', { className: 'dim-field-link' }, [
        el('a', { href: dim.fieldLink }, '↑ Read related Field pieces')
      ]));
    }

    return panel;
  }

  function renderMeasurementCard(m, dimId) {
    const card = el('div', {
      className: 'meas-card',
      dataset: {
        source: m.label.source,
        cadence: m.label.cadence,
        status: m.status,
        direction: m.direction || 'none',
        measId: m.id,
        dimId: dimId,
        expanded: 'false'
      },
      onclick: (e) => onMeasurementCardClick(e, card, m, dimId)
    });
    card.appendChild(el('div', { className: 'meas-question' }, m.question));
    card.appendChild(renderMeasurementLabel(m));
    const chartWrap = el('div', { className: 'meas-chart' });
    chartWrap.appendChild(renderChart(m, sparklineOpts(dimId)));
    card.appendChild(chartWrap);
    if (m.note && m.status !== 'live') {
      card.appendChild(el('div', { className: 'meas-note' }, m.note));
    }
    card.appendChild(el('div', { className: 'meas-collapse-hint' }, '↑ Click anywhere to collapse'));
    return card;
  }

  function sparklineOpts(dimId) {
    return {
      width: 280, height: 84,
      pad: { top: 6, right: 8, bottom: 14, left: 28 },
      mode: 'sparkline',
      showCohort: state.showCohort,
      showYAxis: true,
      showLegend: false,
      dimId: dimId,
      events: state.data ? state.data.events : []
    };
  }

  function detailOpts(dimId) {
    return {
      width: 600, height: 220,
      pad: { top: 12, right: 24, bottom: 24, left: 48 },
      mode: 'detail',
      showCohort: state.showCohort,
      showYAxis: true,
      showLegend: true,
      dimId: dimId,
      events: state.data ? state.data.events : []
    };
  }

  function onMeasurementCardClick(e, cardEl, m, dimId) {
    // Don't toggle if user clicked an interactive child (link etc.)
    if (e.target && (e.target.tagName === 'A' || e.target.closest('a'))) return;
    const isExpanded = cardEl.dataset.expanded === 'true';
    // Collapse any other expanded cards in the same panel first
    const panel = cardEl.closest('.dim-panel');
    if (panel) {
      panel.querySelectorAll('.meas-card[data-expanded="true"]').forEach(other => {
        if (other !== cardEl) collapseCard(other);
      });
    }
    if (isExpanded) collapseCard(cardEl);
    else expandCard(cardEl, m, dimId);
  }

  function expandCard(cardEl, m, dimId) {
    cardEl.dataset.expanded = 'true';
    const chartWrap = cardEl.querySelector('.meas-chart');
    if (chartWrap) {
      chartWrap.innerHTML = '';
      chartWrap.appendChild(renderChart(m, detailOpts(dimId)));
    }
    if (!cardEl.querySelector('.meas-method') && m.method) {
      const method = el('div', { className: 'meas-method' }, [
        el('div', { className: 'meas-method-label' }, 'Method'),
        el('div', { className: 'meas-method-text' }, m.method)
      ]);
      const note = cardEl.querySelector('.meas-note');
      const hint = cardEl.querySelector('.meas-collapse-hint');
      if (note) cardEl.insertBefore(method, note);
      else if (hint) cardEl.insertBefore(method, hint);
      else cardEl.appendChild(method);
    }
  }

  function collapseCard(cardEl) {
    cardEl.dataset.expanded = 'false';
    const dimId = cardEl.dataset.dimId;
    const measId = cardEl.dataset.measId;
    if (!state.data || !dimId || !measId) return;
    const m = state.data.dimensions[dimId].measurements.find(x => x.id === measId);
    if (!m) return;
    const chartWrap = cardEl.querySelector('.meas-chart');
    if (chartWrap) {
      chartWrap.innerHTML = '';
      chartWrap.appendChild(renderChart(m, sparklineOpts(dimId)));
    }
    const method = cardEl.querySelector('.meas-method');
    if (method) method.remove();
  }

  function renderMeasurementLabel(m) {
    const wrap = el('div', { className: 'meas-label' });
    const source = m.label.source;
    const cadence = m.label.cadence;
    wrap.appendChild(el('span', {
      className: `label-source label-source-${source}`
    }, SOURCE_LABEL[source] || source));
    wrap.appendChild(el('span', { className: 'label-sep' }, '·'));
    wrap.appendChild(el('span', {
      className: 'label-cadence'
    }, CADENCE_LABEL[cadence] || cadence));
    if (m.status !== 'live') {
      wrap.appendChild(el('span', { className: 'label-sep' }, '·'));
      wrap.appendChild(el('span', {
        className: `label-status label-status-${m.status}`
      }, m.status));
    }
    return wrap;
  }

  function getStatusBadge(dim) {
    const live = dim.measurements.filter(m => m.status === 'live').length;
    const total = dim.measurements.length;
    return `${live}/${total} live`;
  }

  // ---------- interactivity ----------

  function setFilter(key, value) {
    state.filters[key] = value;
    applyFilters();
  }

  function setCohortMode(showCohort) {
    state.showCohort = showCohort;
    // Re-render to redraw charts with/without cohort lines
    const mount = document.getElementById('findings-root');
    if (mount && state.data) {
      mount.innerHTML = '';
      mount.appendChild(renderFilterBar(state.data));
      mount.appendChild(renderCohortCaption(state.data));
      mount.appendChild(renderDimensionGrid(state.data));
      applyFilters();
    }
  }

  function applyFilters() {
    // Filter pill active states
    document.querySelectorAll('.filter-pill').forEach(pill => {
      const key = pill.dataset.key;
      const value = pill.dataset.value;
      if (key && value) {
        pill.dataset.active = (state.filters[key] === value) ? 'true' : 'false';
      }
    });
    // Cohort toggle active states
    document.querySelectorAll('.filter-group-cohort .filter-pill').forEach((pill, i) => {
      const expected = (i === 0 && !state.showCohort) || (i === 1 && state.showCohort);
      pill.dataset.active = expected ? 'true' : 'false';
    });
    // Cohort caption visibility
    const caption = document.getElementById('cohort-note');
    if (caption) caption.classList.toggle('visible', state.showCohort);
    // Measurement card dimming (filters within each panel)
    document.querySelectorAll('.meas-card').forEach(card => {
      const sourceOk = state.filters.source === 'all' || card.dataset.source === state.filters.source;
      const cadenceOk = state.filters.cadence === 'all' || card.dataset.cadence === state.filters.cadence;
      const statusOk = state.filters.status === 'all' || card.dataset.status === state.filters.status;
      card.dataset.dimmed = (sourceOk && cadenceOk && statusOk) ? 'false' : 'true';
    });
  }

  // ---------- init ----------

  function renderCohortCaption(data) {
    const note = (data.config.cohort && data.config.cohort.note) ||
      'Aggregate across opted-in mentees. Individual members not resolvable from the data displayed.';
    return el('div', { id: 'cohort-note', className: 'cohort-caption' }, note);
  }

  function init() {
    const mount = document.getElementById('findings-root');
    if (!mount) return;
    mount.innerHTML = '<div class="findings-loading">Loading…</div>';
    loadAllData().then(data => {
      if (!data) {
        mount.innerHTML = '<div class="findings-error">Could not load findings data. Run the site via a local HTTP server (e.g., python3 -m http.server) to load JSON files.</div>';
        return;
      }
      state.data = data;
      mount.innerHTML = '';
      mount.appendChild(renderFilterBar(data));
      mount.appendChild(renderCohortCaption(data));
      mount.appendChild(renderDimensionGrid(data));
      applyFilters();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
