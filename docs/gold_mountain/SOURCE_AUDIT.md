# SOURCE AUDIT - What was normalized

## Source documents reviewed

- `Master prompt.txt`
- `Home page.txt`
- `Wellness.txt`
- `Stay.txt`
- `Experience.txt`
- `About.txt`
- `Blog.txt`
- `Contact.txt`
- `Booking _ Enquiry.txt`
- `Global Components.txt`
- `Lovable _ Important notes.txt`
- supplied Gold Mountain Brand Identity PDF
- supplied Gold Mountain Wellness Website Architecture PDF
- four-image asset screenshot supplied in the conversation

## Important normalization decisions

### Homepage order
The source files contained more than one sequence. The normalized decision is:

`Hero -> Wellness -> Arunachala/Location -> Food -> Resort -> Experience -> Stay -> Trust -> Blog -> Enquire`

This follows the user's explicit final decision.

### Location placement
The user selected Location/Arunachala after Resort in the separate ordering question, but then selected the hybrid sequence that places Arunachala/Location before Food and Resort. The final homepage decision recorded by the user was the hybrid sequence. `DECISIONS.md` treats the explicit sequence as authoritative.

### Typography
The older master prompt said `Garet Sans`; the Brand Identity PDF specifies `Outfit (Garet Alf)` as the primary typeface and `The Seasons (Alt)` as the secondary. The normalized documentation follows the Brand Identity specification.

### CTA terminology
The old source used `Book / Enquire`. The final user decision removes `Book Now`. The normalized site uses:
- header: `Enquire`
- contextual: `Explore Wellness`, `Plan Your Stay`, etc.
- final conversion: `WhatsApp Us` + `Send an Enquiry`

### Motion
Older source language included scroll-based movement and image reveals. The user selected minimal motion. The normalized system keeps only subtle, performance-conscious motion.

### Image policy
The user explicitly allowed high-quality online imagery while final assets are being prepared. The normalized asset rules require traceable legitimate sources and tracking for replacement.

### Statue/Buddha image
The user selected not to use the supplied Buddha/statue image. It is recorded as excluded.

### Temporary content
The user wants realistic development placeholders, but all future replacements must be documented. The normalized system therefore allows temporary visual-development copy without allowing fake facts to be presented as verified Gold Mountain information.

### Technical baseline
The normalized system chooses Next.js + TypeScript + App Router + Tailwind with a controlled custom CSS layer, optimized images, full SEO/accessibility/performance requirements, and a strict staged workflow.

## What was not silently invented

No missing phone number, email, founder data, room catalogue, price, package details, testimonials, certification, review count or practitioner details were created.
