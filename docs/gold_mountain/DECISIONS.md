# DECISIONS

## Final project decisions

| Decision | Final choice |
|---|---|
| Instruction structure | Master + dedicated specs |
| Instruction hierarchy | MASTER -> DESIGN SYSTEM -> CONTENT RULES -> ASSET RULES -> PAGE SPEC -> CURRENT TASK |
| Homepage sequence | Hero -> Wellness -> Arunachala/Location -> Food -> Resort -> Experience -> Stay -> Trust -> Blog -> Enquire |
| Arunachala dedicated section | Comes after Wellness before Food in the final sequence |
| Navigation | Home, Wellness, Stay, Experience, About, Blog, Contact |
| Header CTA | Enquire + accessible WhatsApp action |
| Final CTA | WhatsApp Us + Send an Enquiry |
| Book Now label | Not allowed |
| Positioning | Wellness Resort |
| Motion | Minimal |
| Typography | Outfit (Garet Alf) + The Seasons, following supplied Brand Identity |
| Image policy | Provided assets + traceable online temporary imagery |
| Buddha/statue image | Do not use |
| Temporary copy | Allowed for development; track all replacements |
| Component strategy | Reusable components with page-specific composition |
| Styling | Tailwind + controlled custom CSS layer |
| Animation technology | CSS-first; no extra library unless genuinely necessary |
| Image technology | Next.js optimized images; explicit remote configuration |
| Responsive strategy | Responsive from first component; mobile-specific composition when needed |
| SEO | Full technical SEO from beginning |
| Performance | Lighthouse/Core Web Vitals acceptance criterion |
| Accessibility | WCAG-conscious from beginning |
| Dependency policy | Add packages only when justified |
| Build protocol | Inspect -> plan -> implement -> test -> visual QA -> fix -> document -> Git checkpoint |
| Conflict handling | Follow hierarchy and record unresolved decisions |

## Superseded/conflicting instructions normalized

### Old master typography label
Old: `Garet Sans`

Final: `Outfit (Garet Alf)` based on the supplied Brand Identity typography page.

### Old homepage order
Old: Hero -> Wellness -> Resort -> Stay -> Experience -> Location -> Dining -> Trust -> Blog -> Book/Enquire

Final: Hero -> Wellness -> Arunachala/Location -> Food -> Resort -> Experience -> Stay -> Trust -> Blog -> Final Enquiry CTA

### Old primary CTA label
Old: `Book / Enquire`

Final header CTA: `Enquire`

The site is enquiry-led; no fake booking engine.

### Motion
Old material contained more motion-oriented phrases. Final implementation is minimal motion.

### Temporary Buddha image
Old/supplied asset was available. Final decision: do not use it.
