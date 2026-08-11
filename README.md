# Meta Agents Demo marketing site

Astro source for [https://meta-agents-demo.github.io/](https://meta-agents-demo.github.io/).

A provider-neutral Rust control plane for observable agent events, bounded state, advisory coordination, and evidence-backed diagnostics.

## Product boundary

The system handles observable summaries, claims, evidence, confidence, and explicit reflections—not hidden chain-of-thought.

## Local validation

```sh
npm ci --ignore-scripts
npm test
npm run check
npm run build
```

GitHub Pages publishes only the tested `dist/` artifact from `main`. Dependencies are locked and all third-party workflow actions are pinned to immutable commits.
