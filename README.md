# High-End Portfolio

A stunning, high-performance portfolio website built with modern web technologies. Designed to showcase creative work, skills, and professional experience with smooth animations and a premium aesthetic.

## 🚀 Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** CSS / Tailwind (inferred)
- **Animations:** [GSAP](https://greensock.com/gsap/) (GreenSock Animation Platform)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Intersection Observer:** `react-intersection-observer` for scroll-based interactions

## ✨ Features

- **Dynamic Hero Section:** Engaging introduction with profile visual.
- **Projects Showcase:** dedicated section for displaying case studies (configured in `constants.ts`).
- **Skills & Expertise:** Visual representation of technical and design capabilities.
- **Smooth Animations:** Powered by GSAP for a high-end feel.
- **Responsive Design:** Optimized for all device sizes.
- **Easy Configuration:** Centralized content management via `constants.ts`.

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd krish---high-end-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000` (or similar port).

## ⚙️ Configuration

You can easily update the content of the portfolio by modifying `src/constants.ts` (or `constants.ts` in root if applicable).

- **Profile Image:** Update `assets/profile.jpg` or change the import in `constants.ts`.
- **Projects:** Add or edit entries in the `PROJECTS` array.
- **Skills:** Update the `SKILLS` list.
- **Process:** Modify the `PROCESS` steps.

## 📦 Build for Production

To create a production-ready build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 📄 License

MIT License.
