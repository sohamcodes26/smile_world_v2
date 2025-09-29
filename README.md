# Smiles World - Travel Agency Website

A modern, responsive travel agency website designed to showcase travel packages and provide an exceptional user experience for travel enthusiasts.

## 🌟 Features

- **🌍 Travel Packages Showcase** - Beautiful display of curated travel destinations
- **💖 Women-Focused Travel** - Specialized section for women travelers with safe and empowering experiences
- **📱 Responsive Design** - Optimized for all devices and screen sizes
- **🎨 Modern UI/UX** - Clean, intuitive interface with smooth animations
- **📋 Inquiry System** - Easy-to-use contact forms for custom package requests
- **🗺️ Interactive Destinations** - Engaging presentation of travel locations
- **⚡ Fast Performance** - Built with modern web technologies for optimal speed

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd craft-world-travels
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (buttons, cards, etc.)
│   ├── Layout.tsx      # Main layout wrapper
│   ├── PackageCard.tsx # Travel package display component
│   └── InquiryModal.tsx # Contact form modal
├── pages/              # Application pages
│   ├── Index.tsx       # Homepage
│   ├── About.tsx       # About page
│   ├── Contact.tsx     # Contact page
│   ├── CustomizePackage.tsx # Package customization
│   └── WomenFocused.tsx # Women travel section
├── data/               # Static data and configurations
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Images and static assets
```

## 🎨 Technologies Used

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **Lucide Icons** - Beautiful, customizable icons
- **shadcn/ui** - High-quality, accessible UI components

## 📦 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deployment Options

- **Vercel** - Recommended for React applications
- **Netlify** - Easy deployment with continuous integration
- **GitHub Pages** - Free hosting for static sites
- **Traditional Web Hosting** - Upload the `dist` folder contents

## 🎯 Customization Guide

### Adding New Pages

1. Create a new file in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update navigation in `src/components/Layout.tsx`

### Modifying Travel Packages

Edit `src/data/packages.ts` to update travel package information.

### Styling Changes

The project uses Tailwind CSS. Modify classes in components or update the theme in `tailwind.config.ts`.

### Adding New Components

1. Create component in `src/components/`
2. Follow existing patterns for props and styling
3. Export and import where needed

## 📞 Support & Maintenance

For technical support or customization requests, please contact the development team.

## 📄 License

This project is proprietary software developed for Smiles World Travel Agency.

---

**Built with ❤️ for amazing travel experiences**
