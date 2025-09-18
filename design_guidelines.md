# Design Guidelines for Talkhisli (تلخيصلي) Arabic Landing Page

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern SaaS platforms like Notion and Linear, adapted for Arabic language and AI-powered educational technology.

## Core Design Elements

### A. Color Palette
**Light Mode:**
- Primary: 219 54% 51% (Modern blue for trust and technology)
- Background: 0 0% 98% (Clean white background)
- Text: 222 84% 5% (Deep charcoal for readability)
- Accent: 142 76% 36% (Success green for CTAs)

**Dark Mode:**
- Primary: 219 54% 61% (Lighter blue for contrast)
- Background: 222 84% 5% (Deep charcoal)
- Text: 0 0% 98% (Near white)
- Accent: 142 76% 46% (Brighter green)

### B. Typography
- **Primary Font**: Noto Kufi Arabic (already configured)
- **Hierarchy**: 
  - Hero headings: text-5xl/6xl font-bold
  - Section headings: text-3xl/4xl font-semibold
  - Body text: text-lg font-normal
  - UI elements: text-base font-medium

### C. Layout System
**Spacing Units**: Consistently use Tailwind units of 4, 8, 12, and 16
- Container padding: px-4 md:px-8
- Section spacing: py-16 md:py-24
- Component gaps: gap-8 md:gap-12
- Element margins: mb-4, mb-8, mb-12

### D. Component Library

**Navigation**: 
- Fixed header with blur backdrop
- Arabic-optimized navigation with proper RTL support

**Hero Section**:
- Large viewport height with countdown timer
- Gradient background overlay
- Central CTA with email signup form

**Feature Cards**:
- Glass morphism effect with subtle borders
- Consistent 16:9 aspect ratios for feature previews
- Hover states with gentle scale transforms

**Forms**:
- Rounded input fields with focus states
- Arabic placeholder text properly aligned
- Validation states with color-coded feedback

**Countdown Timer**:
- Large, prominent display in hero
- Arabic numerals with labeled time units
- Real-time updates every second

### E. Arabic Language Considerations
- **RTL Layout**: Proper right-to-left text flow
- **Font Optimization**: Noto Kufi Arabic for optimal readability
- **Number Display**: Use Arabic-Indic numerals where appropriate
- **Spacing**: Account for Arabic text characteristics

### F. Animations
**Minimal and Purposeful**:
- Fade-in animations for section reveals
- Gentle hover states on interactive elements
- Smooth countdown timer updates
- No distracting or excessive animations

## Key Design Principles
1. **Educational Trust**: Clean, professional aesthetic that builds confidence in AI technology
2. **Cultural Sensitivity**: Authentic Arabic design patterns and typography
3. **Accessibility**: High contrast ratios and screen reader compatibility
4. **Performance**: Optimized loading with progressive enhancement
5. **Mobile-First**: Responsive design prioritizing mobile experience

## Images
**Hero Background**: Subtle gradient overlay or abstract pattern related to education/technology - avoid specific imagery that might date quickly. Consider using a soft gradient from primary color to accent color.

**Feature Illustrations**: Simple, modern icons or illustrations representing AI, summarization, and learning - use consistent style throughout.

**No large hero image required** - the design relies on typography, color, and the countdown timer for visual impact.