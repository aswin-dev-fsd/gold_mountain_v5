# COMPONENTS

## Core shared components

1. Header
2. Mobile Navigation
3. Footer
4. Primary Button
5. Secondary Button
6. WhatsApp CTA
7. Enquiry CTA
8. Section Heading
9. Editorial Image/Text Section
10. Image Gallery / Image Strip
11. Room Card
12. Wellness Offering Block
13. Experience Block
14. Blog Card
15. Testimonial / Trust Block
16. Pricing / Package Block
17. Enquiry Form
18. Location Block
19. Breadcrumbs where useful
20. Image Reveal transition
21. FAQ Accordion where relevant

## Component principles

- All components share the same design tokens.
- Do not create unrelated visual systems per page.
- Avoid turning every piece of content into a card.
- Prefer editorial compositions over dense UI grids.
- Keep components composable rather than page-locked.
- Use semantic HTML.
- Support keyboard and reduced-motion behaviour.
- Avoid client components unless needed for interactivity.

## CTA system

### Header
`Enquire`

### Primary enquiry
`WhatsApp Us`

### Secondary enquiry
`Send an Enquiry`

### Contextual
Use a section-specific action such as `Explore Wellness`, `Explore the Resort`, `Explore the Experience`, `Plan Your Stay`, or `Discover Dining`.

Do not use `Book Now`.

## Image component

Create a consistent image treatment using Next.js optimized images. The shared component should support:
- aspect ratio
- object positioning
- optional overlay
- responsive sizes
- semantic alt text
- decorative mode
- loading priority for the true LCP image only

## Enquiry form

The enquiry form must validate basic user input and show a clear success/error state.

It must not imply instant booking confirmation.

## Trust block

Support real testimonials and verified proof only. If none is supplied, use a neutral trust/introduction layout instead of fake reviews.
