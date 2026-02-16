# Twilr Production - Portfolio Website

A modern, fully responsive portfolio website for Sushant Budha Chhetri and Twilr Production built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

### Core Functionality
- ✅ **Fully Responsive Design** - Mobile-first approach, works perfectly on all devices
- ✅ **React Router** - Multiple pages with smooth navigation
- ✅ **Smooth Animations** - Motion (Framer Motion) for engaging interactions
- ✅ **SEO Optimized** - Proper meta tags, structured data, and semantic HTML
- ✅ **Accessible** - WCAG compliant with ARIA labels and keyboard navigation
- ✅ **Fast Performance** - Optimized loading and smooth user experience

### Pages
1. **Home** - Hero section, services preview, stats, and CTAs
2. **About** - Personal journey, timeline, skills, vision & mission
3. **Services** - Service catalog with detailed descriptions
4. **Service Detail** - Individual pages for each service (6 services)
5. **Portfolio** - Project showcase with category filtering
6. **Project Detail** - Detailed case studies (9 projects)
7. **Experience** - Professional timeline and certifications
8. **Contact** - Functional contact form with validation

### Services Offered
- Graphic Design
- Web Design & Development
- WordPress Development
- Social Media Management
- Creative Strategy
- UI/UX Design

## 🏗️ Project Structure

```
/
├── index.html                    # Main HTML with SEO meta tags
├── src/
│   ├── main.tsx                 # Application entry point
│   ├── app/
│   │   ├── App.tsx              # Root component with RouterProvider
│   │   ├── routes.tsx           # React Router configuration
│   │   ├── components/
│   │   │   ├── Layout.tsx       # Main layout with header/footer
│   │   │   ├── Header.tsx       # Navigation with mobile menu
│   │   │   ├── Footer.tsx       # Footer with links and social
│   │   │   ├── ScrollToTop.tsx  # Scroll restoration
│   │   │   └── SEO.tsx          # Dynamic SEO meta tags
│   │   └── pages/
│   │       ├── Home.tsx         # Landing page
│   │       ├── About.tsx        # About page
│   │       ├── Services.tsx     # Services catalog
│   │       ├── ServiceDetail.tsx # Individual service pages
│   │       ├── Portfolio.tsx    # Projects gallery
│   │       ├── ProjectDetail.tsx # Project case studies
│   │       ├── Experience.tsx   # Professional timeline
│   │       ├── Contact.tsx      # Contact form
│   │       └── NotFound.tsx     # 404 page
│   └── styles/
│       ├── index.css            # Global styles
│       ├── tailwind.css         # Tailwind imports
│       └── theme.css            # Design tokens
└── package.json                 # Dependencies
```

## 🎨 Design System

### Color Palette
- **Primary**: `#030213` - Dark blue/black
- **Secondary**: Light gray variations
- **Accent**: Muted purple/blue
- **Gradient**: Blue to Purple for highlights

### Typography
- System fonts with fallbacks
- Responsive sizing
- Proper hierarchy (h1-h4)

### Components
- Cards with hover effects
- Buttons with transitions
- Forms with validation
- Icons from Lucide React
- Smooth animations

## 🔧 Technical Stack

- **Framework**: React 18
- **Language**: TypeScript/JSX
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: PNPM

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Skip to main content link
- Focus visible states
- Alt text for images
- Proper heading hierarchy
- Color contrast compliance

## 🔍 SEO Optimization

### Meta Tags
- Title and description
- Open Graph (Facebook)
- Twitter Cards
- Keywords
- Author information
- Canonical URLs

### Structured Data (JSON-LD)
- Organization schema
- Person schema
- Professional Service schema
- Offer catalog

### Performance
- Lazy loading
- Optimized images
- Code splitting
- Minimal bundle size

## 📝 Content Structure

### Services (6)
Each service includes:
- Title and description
- Process (4 steps)
- Tools & technologies
- Deliverables list
- Client benefits

### Projects (9)
Each project includes:
- Title, category, date
- Client name
- Hero image
- Overview
- Challenge & solution
- Tools used
- Deliverables
- Results & impact

### Experience Timeline
- 2018-2024 journey
- 6 major milestones
- Skills development
- Certifications

## 🎯 User Experience

### Navigation
- Sticky header
- Mobile hamburger menu
- Smooth scrolling
- Active page indicators

### Interactions
- Hover effects on cards/buttons
- Loading animations
- Form validation feedback
- Success/error messages

### Forms
- Contact form with validation
- Email format checking
- Required field validation
- Success confirmation

## 🚦 Getting Started

### Prerequisites
- Node.js 18+
- PNPM (or npm/yarn)

### Installation
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## 📧 Contact Information

- **Email**: contact@twilrproduction.com
- **Phone**: +977 123-456-7890
- **Location**: Kathmandu, Nepal

## 🌐 Social Media

- LinkedIn
- Instagram  
- Facebook
- GitHub (portfolio code)

## 📄 License

© 2026 Twilr Production. All rights reserved.
Designed & Developed by Sushant Budha Chhetri

---

## 🔄 Future Enhancements

Potential features to add:
- Blog section
- Testimonials carousel
- Dark/light mode toggle
- Real backend integration
- Analytics integration
- Newsletter subscription
- Live chat support
- Multi-language support
