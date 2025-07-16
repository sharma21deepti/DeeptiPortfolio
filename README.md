# Deepti Sharma - React Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS showcasing professional experience, skills, and projects.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Clone or download the project
cd frontend-only-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The website will be available at `http://localhost:3000`

## 📁 Project Structure

```
frontend-only-portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ContactSection.tsx
│   ├── data/              # Static data
│   │   └── portfolioData.ts
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # App entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies
└── vite.config.ts         # Vite configuration
```

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Inter)

## ✨ Features

- **Responsive Design** - Mobile-first approach
- **Modern UI** - Glass morphism effects and smooth animations
- **Interactive Elements** - Typing animation, smooth scrolling
- **Contact Form** - Functional contact form with validation
- **Resume Download** - One-click resume download
- **Performance Optimized** - Fast loading with Vite
- **TypeScript** - Full type safety

## 🎨 Customization

### Personal Information
Edit `src/data/portfolioData.ts` to update:
- Personal details
- Skills and experience
- Projects and achievements
- Contact information

### Styling
- Colors: Modify CSS variables in `src/index.css`
- Layout: Update Tailwind classes in components
- Animations: Customize in `tailwind.config.js`

### Components
Each section is a separate component in `src/components/`:
- Easy to modify or remove sections
- Reusable and maintainable code
- TypeScript interfaces for type safety

## 📱 Mobile Responsive

The portfolio is fully responsive with:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized layouts for all screen sizes
- Smooth animations on mobile devices

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify**: Drag and drop `dist` folder
- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Upload `dist` contents
- **Traditional Hosting**: Upload `dist` folder via FTP

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Development Server
The development server includes:
- Hot module replacement
- Fast refresh
- TypeScript checking
- Tailwind CSS compilation

## 🎯 Performance

- Optimized bundle size with Vite
- Efficient React rendering
- Compressed assets
- Fast loading times
- Smooth animations

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Support

For questions or issues:
- Email: deepti21aug@gmail.com
- LinkedIn: [linkedin.com/in/deepti-sharma](https://linkedin.com/in/deepti-sharma)
- GitHub: [github.com/deepti21aug](https://github.com/deepti21aug)

---

Built with ❤️ using React and TypeScript