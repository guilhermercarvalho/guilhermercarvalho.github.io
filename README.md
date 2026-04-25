# Guilherme Carvalho – Portfolio

> Personal portfolio website for **Guilherme Carvalho**, a full‑stack developer.
> Built to showcase selected projects, provide contact options, and reflect a modern, clean design with bilingual support (🇧🇷 PT‑BR / 🇺🇸 EN).

[![Deploy to GitHub Pages](https://img.shields.io/github/actions/workflow/status/guilhermercarvalho/guilhermercarvalho.github.io/deploy.yml?branch=main&label=deploy&logo=github)](https://github.com/guilhermercarvalho/guilhermercarvalho.github.io/actions/workflows/deploy.yml)

🔗 **Live website** – [guilhermercarvalho.github.io](https://guilhermercarvalho.github.io)

---

## ✨ Features

- **Responsive layout** – Tailwind CSS with dark/light mode toggle.
- **Bilingual (PT‑BR / EN)** – i18next + LanguageDetector.
- **Dynamic projects** – Fetches pinned repositories from GitHub API (personal token).
- **Contact form** – Web3Forms integration with validation.
- **Analytics** – Google Analytics 4 (optional).
- **SEO ready** – meta tags, JSON‑LD structured data, sitemap.xml, robots.txt.
- **PWA manifest** – Offline ready icon and theme colors.
- **GitHub Actions** – Automatic deployment to GitHub Pages and PR validation.

---

## 🧰 Tech Stack

| Category        | Tools                                                     |
| --------------- | --------------------------------------------------------- |
| **Frontend**    | React 18, TypeScript, Vite, Tailwind CSS                  |
| **Routing**     | SPA with anchor hash navigation (#work, #about, #contact) |
| **Icons**       | Lucide React                                              |
| **i18n**        | i18next, react-i18next, i18next-browser-languagedetector  |
| **Analytics**   | react-ga4                                                 |
| **HTTP client** | native fetch (GitHub API, Web3Forms)                      |
| **Deployment**  | GitHub Pages + GitHub Actions                             |

---

## 📦 Getting Started

### Prerequisites

- Node.js **22** or higher (npm comes bundled)
- A [GitHub personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) (classic or fine‑grained) with `repo` or `public_repo` scope.
- (Optional) A Web3Forms access key – get one at [web3forms.com](https://web3forms.com)
- (Optional) Google Analytics 4 Measurement ID

### Installation

```bash
git clone https://github.com/guilhermercarvalho/guilhermercarvalho.git
cd guilhermercarvalho
npm install
```

### Environment Variables

Create a `.env.local` file and fill in the following values (see `.env.example`):

```env
VITE_GITHUB_TOKEN=ghp_xxxxxxxxxxxx
VITE_WEB3FORMS_KEY=your-web3forms-key
VITE_WHATSAPP_NUMBER=5511999999999
VITE_GA_MEASUREMENT_ID=G-XXXXXXXX
```

| Variable                 | Required | Description                                 |
| ------------------------ | -------- | ------------------------------------------- |
| `VITE_GITHUB_TOKEN`      | ✅        | GitHub token to fetch repository data       |
| `VITE_WEB3FORMS_KEY`     | ❌        | Key for the contact form submission         |
| `VITE_WHATSAPP_NUMBER`   | ❌        | Phone number (with country code, no spaces) |
| `VITE_GA_MEASUREMENT_ID` | ❌        | GA4 measurement ID (e.g., `G-XXXXX`)        |

> ℹ️ If an optional variable is not set, the corresponding feature (analytics, contact form, WhatsApp link) will be disabled or fallback gracefully.

### Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).
The project supports HMR (Hot Module Replacement) and ESLint.

---

## 🚀 Building & Deployment

### Build for production

```bash
npm run build
```

The output will be placed in the `dist/` folder.

### Preview production build

```bash
npm run preview
```

### Deployment to GitHub Pages

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:

- Runs on every push to the `main` branch.
- Installs dependencies, builds the project.
- Uploads the `dist/` folder to GitHub Pages.

**Manual trigger** is also available in the Actions tab.

> ⚠️ Make sure the `homepage` field in `package.json` points to your GitHub Pages URL.
> Also configure GitHub Pages to serve from the `gh-pages` branch (or use the GitHub Actions deployment method automatically).

### Continuous Integration

A validation workflow (`.github/workflows/validate.yml`) runs on every PR targeting `main`. It executes:

```bash
npm ci
npm run lint
```

---

## 📁 Project Structure (simplified)

```
.
├── .github/workflows/         # CI/CD pipelines
├── public/                    # Static assets
│   ├── favicon.svg
│   ├── manifest.json
│   ├── privacy*.html
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── context/               # ThemeContext (dark/light)
│   ├── data/                  # person data, GitHub API logic, project metadata
│   ├── i18n/                  # translation resources (en, pt-BR)
│   ├── lib/                   # analytics helper
│   ├── pages/                 # components: Hero, Projects, About, Contact, Header, Footer
│   ├── types/                 # TypeScript interfaces
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env.example
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🔧 Customization

### Add / remove projects

1. Edit `src/data/projects-shared.ts` – add a key matching the GitHub repository name.
2. The project will be fetched automatically from GitHub if the repo is public.

### Modify personal data

Open `src/data/person.ts` and update your name, social links, location, email, WhatsApp, etc.

### Translations

All texts are stored in `src/i18n/resources/en.ts` and `pt-BR.ts`. Extend or modify them as needed.

### Environment overrides for production

The build step uses `.env.production` (if present) – you can also set secrets/vars directly in GitHub:

- **Secrets used** in `deploy.yml`:
  - `VITE_GITHUB_TOKEN`
  - `VITE_WEB3FORMS_KEY`
  - `VITE_WHATSAPP_NUMBER`
- **Variable** (public):
  - `VITE_GA_MEASUREMENT_ID` (stored as a repository **variable**, not a secret)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
Feel free to use it as a base for your own portfolio.

---

## 📬 Contact

- **Email** – dev.gcarvalho@gmail.com
- [**LinkedIn**](https://linkedin.com/in/guilhermercarvalho)
- [**GitHub**](https://github.com/guilhermercarvalho)

---

*Built with ❤️ using React, Vite and Tailwind CSS.*
