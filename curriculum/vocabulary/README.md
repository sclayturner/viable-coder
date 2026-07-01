# Curriculum Vocabulary

This folder is for builder-facing vocabulary surfaces that can be rendered inside the private kit app.

The canonical internal source remains `doctrine/playbook-lexicon.md`. Files here should translate canonical terms into the moment where the builder needs them. Do not turn this folder into a detached glossary the builder must read before working.

Expected uses:

- `index.md`: app-facing vocabulary index when needed.
- Topic files such as `ai-shop.md`, `adlc.md`, or `signals.md` when a cluster of terms needs one renderable surface.
- Lesson-local `vocabulary.md` files inside `curriculum/units/**/lessons/**/` when terms are introduced at the point of use.

Vocabulary should answer four questions:

1. What does the term mean here?
2. What is it not?
3. Where does the builder encounter it in the kit?
4. What action does understanding the term make possible?
