# Project memory

## Product intent & audience

- Web app/site built with Vite + React.
- Specific product domain and audience not yet identified from interactions.

## Brand personality & voice

- User values unique, non-generic visuals; explicitly wanted to avoid a flat "AI-generated black" look.
- Prefers creative, atmospheric effects over minimal flat backgrounds.

## Visual design & UX direction

- Dark base theme; background uses animated color overbleed instead of flat black.
- Four large blurred color blobs (teal, coral, gold, mint) float slowly behind the page, shifting position and size.
- Blobs use `mix-blend-mode: screen` so colors glow through the dark background.
- Section backgrounds are semi-transparent with slight blur so colors bleed through section boundaries.
- Content sits above the blob layer via a site-shell wrapper.
- Reduced-motion media query disables blob animation for accessibility.
- Responsive: mobile nav present; footer uses `border-top`.

## Decisions, constraints & rationale

- Flat black background rejected by user; replaced with animated overbleed to create a living canvas effect.
- Translucent section backgrounds chosen so color bleeding is visible across all sections, not blocked by opaque blocks.
- Build was broken during edits (orphaned footer `border-top` rule) and fixed; final build passes.

## Open questions & assumptions

- User has not confirmed if blob brightness, speed, or colors are final; may need tuning.
- No explicit brand color palette provided; current colors (teal, coral, gold, mint) were chosen by inference.
- Product purpose, content structure, and target audience remain unconfirmed.