# Portfolio - Muhammad Mujeeb Ur Rahman

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark theme
- **Responsive**: Fully responsive across all devices
- **Interactive**: Smooth animations and hover effects
- **Contact Form**: EmailJS integration for direct messaging
- **CV Download**: Direct download functionality for resume
- **SEO Optimized**: Proper meta tags and structured data

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Email**: EmailJS
- **UI Components**: Radix UI

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── ...
├── components/
│   ├── about.tsx
│   ├── contact.tsx
│   ├── experience.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── navbar.tsx
│   ├── projects.tsx
│   └── skills.tsx
├── public/
│   └── resume.pdf (add your CV here)
└── ...
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio_2.git
   cd portfolio_2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your resume**
   - Place your CV file as `public/resume.pdf`

4. **Configure EmailJS** (for contact form)
   - Update the credentials in `components/contact.tsx`:
     ```typescript
     emailjs.send(
       "your_service_id", // Service ID
       "your_template_id", // Template ID
       { ... },
       "your_public_key" // Public Key
     )
     ```

5. **Run development server**
   ```bash
   npm run dev
   ```

## 🌐 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. **Push to GitHub**
   - Create a new repository on GitHub
   - Push your code to the `main` or `master` branch

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source

3. **Update Repository Name** (if different)
   - In `next.config.mjs`, update the `basePath` and `assetPrefix`:
     ```javascript
     basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
     assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
     ```

4. **Deploy**
   - The GitHub Actions workflow will automatically build and deploy
   - Your site will be available at: `https://your-username.github.io/your-repo-name/`

### Manual Deployment

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Deploy the `out` folder**
   - The `out` folder contains your static site
   - Upload this folder to your GitHub Pages branch

## 📧 Contact Form Setup

The contact form uses EmailJS for sending emails directly to your inbox:

1. **Create EmailJS account** at [emailjs.com](https://www.emailjs.com/)
2. **Create Email Service** (Gmail, Outlook, etc.)
3. **Create Email Template** with variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
4. **Update credentials** in `components/contact.tsx`

## 🎨 Customization

### Colors
Update the color scheme in `app/globals.css`:
```css
:root {
  --primary: #00e5ff;
  --secondary: #3b82f6;
  --accent: #8b5cf6;
}
```

### Content
Update personal information in the respective components:
- `components/hero.tsx` - Name, title, social links
- `components/about.tsx` - Bio, stats, skills
- `components/experience.tsx` - Work experience
- `components/projects.tsx` - Project showcase

## 📱 Mobile Optimization

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔍 SEO

- Proper meta tags in `app/layout.tsx`
- Semantic HTML structure
- Fast loading with optimized images
- Accessible design with proper ARIA labels

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Muhammad Mujeeb Ur Rahman**