# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, and a clean, professional design.

## ✨ Features

- **Responsive Design** - Fully responsive layout that works on all devices
- **Dark/Light Mode** - Theme toggle with persistent preferences
- **Smooth Animations** - Framer Motion animations for engaging user experience
- **Interactive Sections**:
  - Hero section with social links and profile photo
  - About section with personal details
  - Projects showcase with GitHub and Live Demo links
  - Skills categorized by domain with technology icons
  - Education timeline
  - Professional certifications
  - Contact form with EmailJS integration
- **Modern UI Components** - Built with shadcn/ui and Radix UI
- **SEO Optimized** - Meta tags for better search engine visibility

## 🚀 Technologies Used

### Frontend
- **React 18.3** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **React Router** - Client-side routing

### UI Components
- **shadcn/ui** - Accessible component library
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icon library
- **React Icons** - Technology logos

### Additional Libraries
- **EmailJS** - Contact form email service
- **next-themes** - Dark mode support
- **class-variance-authority** - Component variants
- **tailwind-merge** - Utility class merging

## 📦 Installation

### Prerequisites
- Node.js 18+ or Bun runtime
- npm or bun package manager

### Setup

```bash
# Clone the repository
git clone https://github.com/Omjaiswal241/Portfolio.git

# Navigate to project directory
cd Portfolio

# Install dependencies (using bun)
bun install

# Or using npm
npm install

# Start development server
bun run dev

# Or using npm
npm run dev
```

The application will be available at `http://localhost:8080`

## 🛠️ Available Scripts

```bash
# Development
bun run dev          # Start development server
npm run dev

# Build
bun run build        # Production build
npm run build

# Preview
bun run preview      # Preview production build
npm run preview

# Testing
bun run test         # Run tests
npm run test

# Linting
bun run lint         # Run ESLint
npm run lint
```

## 📁 Project Structure

```
Portfolio/
├── public/                  # Static assets
│   ├── profile.jpeg        # Profile photo
│   ├── palo-alto-certificate.pdf
│   └── robots.txt
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── CertificationsSection.tsx
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.ts
```

## 📧 EmailJS Configuration

To enable the contact form:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service (e.g., Gmail)
3. Create an email template
4. Update credentials in `src/components/ContactSection.tsx`:

```typescript
await emailjs.sendForm(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  formRef.current,
  "YOUR_PUBLIC_KEY"
);
```

## 🎨 Customization

### Update Personal Information
Edit the following files to customize content:
- **Hero Section**: `src/components/HeroSection.tsx`
- **About**: `src/components/AboutSection.tsx`
- **Projects**: `src/components/ProjectsSection.tsx`
- **Skills**: `src/components/SkillsSection.tsx`
- **Education**: `src/components/EducationSection.tsx`
- **Certifications**: `src/components/CertificationsSection.tsx`

### Theme Colors
Modify theme colors in `src/index.css` under the `:root` and `.dark` selectors.

## 🌐 Deployment

### Build for Production

```bash
bun run build
# or
npm run build
```

Build output will be in the `dist/` directory.

### Deploy to Hosting Platforms

**Vercel / Netlify:**
```bash
# Install CLI
npm i -g vercel
# or
npm i -g netlify-cli

# Deploy
vercel
# or
netlify deploy --prod
```

**GitHub Pages:**
1. Update `vite.config.ts` with base path
2. Build and push to `gh-pages` branch

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Om Jaiswal**
- Email: omjaiswal241@gmail.com
- LinkedIn: [linkedin.com/in/omjaiswal/241](https://linkedin.com/in/omjaiswal/241)
- GitHub: [github.com/Omjaiswal241](https://github.com/Omjaiswal241)
- LeetCode: [leetcode.com/omjaiswal241](https://leetcode.com/omjaiswal241)
- Twitter: [@omjaiswal241](https://x.com/omjaiswal241)

---

Made with ❤️ by Om Jaiswal
