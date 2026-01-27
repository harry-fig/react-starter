# Project Instructions

**Project:** React + TypeScript + Vite + Tailwind (template)

**Overview**
- **Stack:** React 19, TypeScript, Vite, TailwindCSS, ESLint
- **Purpose:** Minimal starter for a TypeScript React app with Vite and Tailwind.

**Prerequisites**
- **Node:** Node.js 16+ (LTS recommended). Verify with `node -v`.
- **Package manager:** `pnpm` is recommended (this repo contains `pnpm-lock.yaml`), but `npm` also works.

**Install dependencies**
```bash
# using pnpm (preferred)
pnpm install

# or using npm
npm install
```

**Development**
- Start dev server with HMR:
```bash
pnpm dev
# or
npm run dev
```

**Build & Preview**
- Build for production (this runs `tsc` then `vite build`):
```bash
pnpm build
# or
npm run build
```
- Preview the production build locally:
```bash
pnpm preview
# or
npm run preview
```

**Scripts (from package.json)**
- `dev`: runs Vite dev server
- `build`: runs `tsc` then `vite build`
- `lint`: runs ESLint across `ts`/`tsx`
- `preview`: serves the production build

**TypeScript**
- Configured with `tsconfig.json` for strict checks (`strict: true`) and `react-jsx`.
- Vite handles TSX compilation; `build` uses `tsc` for type checking before bundling.

**Linting & Formatting**
- ESLint is configured (see `package.json` `lint` script). Run:
```bash
pnpm lint
# or
npm run lint
```
- Consider adding Prettier and an ESLint-Prettier integration for consistent formatting.

**Styling (TailwindCSS)**
- Tailwind is installed and configured via `tailwind.config.js` and PostCSS.
- Use utility classes directly in components. Ensure `index.css` imports Tailwind base/components/utilities.

**Project Structure (important files)**
- `index.html` — app entry HTML
- `src/main.tsx` — app bootstrapping
- `src/app.component.tsx` — main app component
- `src/components/*` — UI components (Form, Filters, TaskList, etc.)
- `src/constants/*`, `src/models/*` — app data and types
- `vite.config.ts`, `tsconfig.json`, `tailwind.config.js` — build and tool configs

**Recommended Editor Extensions**
- VS Code: `ESLint`, `Tailwind CSS IntelliSense`, `TypeScript`, `Prettier` (optional)

**Testing**
- This starter does not include tests. For TypeScript + Vite, consider `vitest` with `@testing-library/react`.

**Deployment**
- Static-site hosts that support Vite-built assets work well (Vercel, Netlify, Cloudflare Pages).
- Build the app (`pnpm build`) and point the host to the generated `dist` folder.

**Troubleshooting**
- If `pnpm` is not installed, either install it (`npm install -g pnpm`) or use `npm install`.
- If you see HMR or build errors, confirm Node version and run `pnpm install` followed by `pnpm dev`.
- Common ESLint failures: run `pnpm lint` and fix reported issues; consider `--fix` when safe.

**Best-practice recommendations**
- Keep `components/` small and focused; prefer composition over large components.
- Add unit and integration tests early (use `vitest` + `@testing-library/react`).
- Add `husky` + `lint-staged` to run linters and formatters on pre-commit.
- Use environment variables via `.env` files (Vite uses `VITE_` prefix for client env vars).

**Next steps (suggested)**
- Add `prettier` and integrate with ESLint.
- Add `vitest` and a small test suite for `Form` and `TaskList` components.
- Add CI (GitHub Actions) to run lint, type-check, build, and tests on PRs.

---

If you want, I can:
- add `vitest` + example tests,
- add `prettier` and update ESLint integration,
- scaffold GitHub Actions CI.
