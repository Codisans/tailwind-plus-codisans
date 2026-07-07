# Partners Page — Social Proof Plan

Context for whoever picks this up: the Partners page (`src/app/[locale]/partners/page.tsx`,
copy in `messages/en.json` + `messages/es.json` under `PartnersPage`) currently has **no social
proof**. The old "See the difference" / proof-of-competence section was removed. This doc captures
the intended replacement.

## Constraints (these shape everything)

1. **White-label business.** The strongest proof (real agency partnerships and end-client work) is
   often confidential / not publicly showable. Testimonials likely need anonymizing
   (role + studio type + city, e.g. "Creative Director, brand studio, Berlin").
2. **Low-asset preference.** No screenshot-hunting or image-heavy case studies. Favor **text-first**
   proof. (Reason the previous section was cut.)
3. **Must be true.** Every stat, quote, and named project has to be real. Do not invent proof —
   gather the real inputs from the owner first (open questions at the bottom).

## The three options

### Tier 1 — One agency-partner testimonial (highest leverage)
A single strong quote in the voice of the exact fear the page addresses. Example tone (placeholder,
replace with a real quote):
> "They shipped pixel-perfect, hit every deadline, and our client never knew they weren't us."
> — Creative Director, brand studio (Berlin)

- Anonymize honestly if naming isn't allowed; still credible, needs **zero images**.
- One great quote beats several weak ones.
- **Placement:** right after the **Risks** section (Section 3) — doubt peaks there, so proof lands hardest.

### Tier 2 — Compact stat strip
Reinstate the quantified track record (we lost "zero missed deadlines" when the old section was cut),
as a clean 3-across number band — not a mockup. Example metrics:
`projects shipped · on-time rate · years partnering`

- Lowest-asset proof there is (just true numbers).
- **Placement:** early — under the hero or after the "You're tired of developers who don't get it"
  section — so trust is established before the pitch deepens.

### Tier 3 (optional) — "Recent builds," reusing existing assets
A light text strip of named/anonymized recent projects, e.g.
"A headless Shopify store. A news platform with semantic clustering. A Laravel client portal."

- No new assets. Can reference the Felici videos already in the hero, plus real builds
  (news/embeddings app, semantic search, Hydrogen stores, Statamic/Umbraco, Laravel).

## Recommendation
**Tier 1 + Tier 2** is the sweet spot: one testimonial after Risks, a stat strip up high. Fixes the
credibility hole with no image sourcing. Tier 3 only if there's appetite for more.

## Open questions to resolve before building (need real inputs from owner)
- Any **real quote** from a partner/client (even an informal Slack/email line to tighten)?
  Can they be named, or anonymized only?
- What **real numbers** can be stood behind (projects shipped, years operating, on-time record,
  agencies served)?
- Any **named projects** allowed to be referenced publicly?

## Implementation notes
- Add copy as new keys under `PartnersPage` in both `messages/en.json` and `messages/es.json`
  (keep locales in sync).
- No em dashes in copy (project preference).
- Keep example/feature strings short — match the tightened rhythm of the `ai.examples` block.
