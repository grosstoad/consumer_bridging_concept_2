# Property Listing Web Application

A modern, responsive property listing web application built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Property Details Page**: Complete property information including address, specifications, and sale history
- **Image Gallery**: Beautiful gallery showcasing property photos, maps, and floor plans
- **About Property Section**: Detailed property description with key information
- **Borrowing Power Calculator**: Interactive component that allows users to calculate their borrowing power based on their current loan balance
- **Property Timeline**: Historical timeline showing past sales, listings, and lease information
- **Responsive Design**: Mobile-first design that works seamlessly across all devices

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

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main property listing page
│   └── globals.css         # Global styles with Tailwind
├── components/
│   ├── Header.tsx                      # Navigation header
│   ├── PropertyHero.tsx                # Property title and details
│   ├── PropertyGallery.tsx             # Image gallery
│   ├── AboutProperty.tsx               # Property description
│   ├── BorrowingPowerCalculator.tsx    # Borrowing power CTA component
│   └── PropertyTimeline.tsx            # Property history timeline
└── package.json
```

## Key Components

### BorrowingPowerCalculator

The borrowing power calculator is a beautifully designed component that:
- Features a gradient background with subtle patterns
- Includes an input field for current loan balance with automatic currency formatting
- Provides a compelling CTA to encourage users to explore affordability options
- Shows trust indicators (secure, no obligation, quick)
- Is fully responsive and interactive

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library

## Build for Production

```bash
npm run build
npm start
```

## Customization

The primary brand color can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#C30061',  // Main brand color
    hover: '#A10050',    // Hover state
  },
}
```

