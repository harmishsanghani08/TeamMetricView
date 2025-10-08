# Design Guidelines: Startup Digital Solutions Website

## Design Approach

**Selected Approach:** Design System (Material Design + Modern SaaS Patterns)
**Justification:** This is a utility-focused, information-dense corporate website where credibility, professionalism, and clarity are paramount. The startup needs to establish trust while showcasing technical capabilities.

**Reference Inspiration:** Linear (for minimalism and typography), Vercel (for tech-forward aesthetic), Stripe (for clean layouts)

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Primary Blue: `220 85% 55%` (Trust, technology, professionalism)
- Secondary Blue: `220 80% 45%` (Hover states, accents)
- Background: `0 0% 100%` (Pure white)
- Surface: `220 15% 97%` (Light gray for cards/sections)
- Text Primary: `220 20% 15%` (Near black with blue undertone)
- Text Secondary: `220 10% 45%` (Medium gray)
- Border: `220 15% 90%` (Subtle dividers)

**Dark Mode:**
- Primary Blue: `220 85% 60%` (Brighter for contrast)
- Background: `220 20% 10%` (Deep blue-black)
- Surface: `220 18% 14%` (Elevated cards)
- Text Primary: `0 0% 95%` (Off-white)
- Text Secondary: `220 10% 65%` (Light gray)

### B. Typography

**Fonts (Google Fonts):**
- Primary: Inter (body text, UI elements) - weights 400, 500, 600
- Display: Plus Jakarta Sans (headings, hero) - weights 600, 700, 800

**Scale:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Headings: text-3xl md:text-4xl, font-semibold
- Subsection: text-xl md:text-2xl, font-medium
- Body: text-base md:text-lg
- Small: text-sm

### C. Layout System

**Spacing Units:** Consistently use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for all spacing

**Container Strategy:**
- Max width: `max-w-7xl mx-auto`
- Padding: `px-4 sm:px-6 lg:px-8`
- Section spacing: `py-16 md:py-20 lg:py-24`

**Grid Systems:**
- Services cards: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`
- Team members: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- Content sections: Single column with `max-w-4xl` for readability

### D. Component Library

**Navigation:**
- Fixed header with backdrop blur: `fixed top-0 w-full bg-white/80 backdrop-blur-md border-b`
- Logo: Left-aligned, medium size
- Nav links: Horizontal on desktop, hamburger menu on mobile
- CTA button in header: Primary blue with rounded edges

**Hero Section:**
- Height: `min-h-screen flex items-center` (not forced 100vh)
- Large hero image: Abstract tech/coding visual or geometric patterns, positioned as background with overlay
- Headline placement: Centered or left-aligned with z-index above image
- CTA button: Large, primary color with subtle shadow and hover lift effect

**Service Cards:**
- Design: White/surface background with border and subtle shadow
- Hover: Transform scale slightly (scale-105), increase shadow, shift primary color
- Icon: Top of card, 48x48px, primary color
- Structure: Icon → Title (font-semibold, text-xl) → Description (text-gray-600, 2-3 lines)
- Corners: rounded-xl
- Padding: p-6 md:p-8

**Team Cards (About Page):**
- Photo: Circular (rounded-full), centered, 160x160px
- Layout: Photo → Name (font-semibold) → Role (text-sm, text-gray-600)
- Hover: Subtle scale on photo

**Contact Form:**
- Input fields: Full width, rounded-lg borders, padding p-3
- Focus state: Blue ring (ring-2 ring-blue-500)
- Labels: Above inputs, font-medium, text-sm
- Submit button: Full width on mobile, auto width on desktop
- Success alert: Green background, rounded borders, slide-in animation

**Footer:**
- Background: Dark blue-gray (`bg-gray-900`)
- Layout: 3-column grid on desktop (Company info, Quick links, Social)
- Social icons: Horizontal row, white with hover color transition
- Copyright: Centered at bottom, text-sm

### E. Animations (Framer Motion)

**Page Transitions:**
- Fade in + slide up: `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}`

**Hover Effects:**
- Service cards: Transform and shadow on hover
- Buttons: Slight scale (scale-105) and shadow increase
- Links: Underline slide-in animation

**Scroll Animations:**
- Stagger children on sections with multiple cards
- Fade in elements as they enter viewport (minimal, not on every element)

## Images

**Hero Image:**
- Large, full-width background image showing modern tech workspace, abstract code visualization, or geometric tech patterns
- Applied with overlay gradient (dark at bottom for text readability)
- Positioned: `bg-cover bg-center` with overlay `bg-gradient-to-r from-blue-900/80 to-blue-600/60`

**About Page:**
- Team photos: Professional headshots, circular crop, consistent lighting
- Mission/vision section: Optional abstract illustration or tech graphic

**Services Page:**
- Icons: Use Heroicons for service category icons (code, device-mobile, paint-brush, wrench)
- No large images needed - focus on icon clarity

## Key Design Principles

1. **Minimalism:** Clean layouts with generous whitespace, no clutter
2. **Professional Trust:** Consistent spacing, alignment, professional imagery
3. **Tech-Forward:** Modern glassmorphism effects (backdrop-blur), subtle gradients
4. **Responsive First:** Mobile-optimized with progressive enhancement
5. **Performance:** Smooth 60fps animations, optimized images, minimal animation overload
6. **Accessibility:** High contrast ratios (4.5:1 minimum), keyboard navigation, ARIA labels on interactive elements

## Mobile Considerations

- Hamburger menu: Slide-in drawer animation
- Touch targets: Minimum 44x44px for all interactive elements
- Stack all grid layouts to single column below md breakpoint
- Reduce padding: Scale from px-4 on mobile to px-8 on desktop
- Hero text: Scale down from text-5xl to text-4xl on mobile