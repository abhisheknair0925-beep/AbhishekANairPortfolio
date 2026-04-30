# 🚀 Abhishek A Nair - Premium Developer Portfolio

A high-performance, interactive, and visually stunning developer portfolio built to showcase backend engineering, system architecture, and modern frontend capabilities. The project is designed with a premium "SaaS dashboard" aesthetic, utilizing dark themes, glassmorphism, and seamless micro-interactions.

## ✨ Features

- **Dynamic GitHub Telemetry:** Integrates directly with the GitHub API to fetch real-time data including followers, top repositories, and recent open-source activity.
- **Interactive Data Visualizations:** Utilizes **Recharts** for a dynamic Language Distribution pie chart and embeds live GitHub contribution heatmaps.
- **System Architecture Flow:** An animated SVG diagram built with **Framer Motion** that visualizes data flows between Client, API Gateway, ETL Workers, and Databases.
- **System Impact Dashboard:** Uses `react-countup` and `react-intersection-observer` to trigger impressive counting animations for scale metrics (e.g., millions of transactions) when scrolled into view.
- **Premium Animations & Micro-Interactions:** 
  - Smooth scroll progress bar and custom trailing cursor glow.
  - Staggered grid entries and fluid slide-up reveals on scroll.
  - Interactive "Glassmorphic" cards that lift and cast glowing shadows on hover.
  - Floating background gradient blobs and grid patterns.

## 🛠️ Technology Stack

- **Core:** [React 19](https://react.dev/) & [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Data Visualization:** [Recharts](https://recharts.org/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Interactivity Tools:** `react-countup`, `react-intersection-observer`
- **Analytics:** Vercel Speed Insights (`@vercel/speed-insights`)
- **Contact Form:** EmailJS (`@emailjs/browser`)

## 🚀 Getting Started

To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd AbhishekANairPortfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🎨 Design System

The UI/UX focuses on a "dark mode" aesthetic that feels futuristic and highly technical:
- **Colors:** Deep Slate (`#0F172A`), Indigo (`#6366F1`), Purple (`#8B5CF6`), and Blue (`#3B82F6`).
- **Typography:** Modern sans-serif fonts (`Inter` and `Poppins`).
- **Utilities:** Custom `.glass-card` classes with `backdrop-blur-xl`, animated glowing borders, and pulsing micro-animations.

---
*Designed & Engineered by Abhishek A Nair*
