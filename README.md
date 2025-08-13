# Nelson's Developer Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS to showcase Nelson's skills, projects, and professional information.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with beautiful animations
- **Modern UI/UX**: Clean, professional design with smooth transitions
- **Interactive Components**: Dynamic project filtering and contact form
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 18 with Hooks
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Build Tool**: Create React App

## 📱 Pages & Sections

### 1. Home Page
- Hero section with Nelson's introduction
- Call-to-action buttons
- Skills preview with icons
- Smooth scroll indicator

### 2. About Me
- Personal bio and background
- Technical skills and tech stack
- Experience highlights
- Fun facts and personal touch

### 3. Projects
- Portfolio of 5 featured projects
- Project filtering by category
- Detailed descriptions and technologies
- Links to live demos and GitHub repos

### 4. Contact
- Interactive contact form
- Alternative contact methods
- Social media links
- Response time information

### 5. Footer
- Quick navigation links
- Social media icons
- Copyright information
- Professional branding

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The build files will be created in the `build` folder.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation component
│   ├── Home.js         # Home page component
│   ├── About.js        # About page component
│   ├── Projects.js     # Projects showcase component
│   ├── Contact.js      # Contact form component
│   └── Footer.js       # Footer component
├── App.js              # Main app component with routing
├── index.js            # App entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary colors: Blue theme
- Secondary colors: Gray theme
- Custom gradient text effects

### Content
- Update personal information in each component
- Modify project data in `Projects.js`
- Change contact details in `Contact.js`
- Update social media links in `Footer.js`

### Styling
- Modify component styles in individual files
- Update global styles in `src/index.css`
- Customize Tailwind configuration in `tailwind.config.js`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `build`

### Vercel
1. Import your GitHub repository
2. Framework preset: Create React App
3. Build command: `npm run build`

### GitHub Pages
1. Add `homepage` field to `package.json`
2. Install `gh-pages`: `npm install --save-dev gh-pages`
3. Add deploy scripts to `package.json`
4. Run `npm run deploy`

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For any questions or suggestions, please reach out through the contact form on the website or directly via email.

---

**Built with ❤️ by Nelson using React and Tailwind CSS** 