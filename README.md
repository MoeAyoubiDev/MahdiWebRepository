# OnBoarding Web Physio - Dr. Mahdi Kheir Din

A modern, ultra-professional physiotherapy landing page built with Next.js (App Router) and Tailwind CSS.

## Features

- 🎨 Modern, clean medical minimal design
- 💙 Soft blue and white color palette
- ✨ Glassmorphism effects
- 📱 Fully responsive, mobile-first design
- 🎭 Smooth scroll animations
- ⚡ Optimized for performance
- 🔍 SEO-friendly structure

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── Navigation.tsx      # Fixed navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Qualifications.tsx  # Qualifications cards
│   ├── Specializations.tsx # Services grid
│   ├── TreatmentApproach.tsx # Treatment methods
│   ├── Testimonials.tsx    # Patient testimonials
│   ├── Contact.tsx         # Contact information
│   └── Footer.tsx          # Footer with links
├── package.json
├── tailwind.config.js      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## Customization

- Update contact information in `components/Contact.tsx`
- Modify doctor information in respective component files
- Adjust colors in `tailwind.config.js`
- Update metadata in `app/layout.tsx`

## Technologies

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Inter Font** - Professional typography

## License

Private project for Dr. Mahdi Kheir Din

