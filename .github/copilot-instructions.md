<!-- GitHub Copilot instructions for working with the Volley repo -->
# Repo-specific guidance for AI coding agents

This file gives focused, actionable guidance to AI coding agents working on the Volley Angular/Supabase project. Keep suggestions specific to files and patterns actually present in this repo.

**Project Overview:**
- **Type:** Angular 20 application (root project `volley`). See `angular.json` and `package.json`.
- **Frontend entry:** `src/main.ts`, app code lives in `src/app` (see `app.ts`, `app.routes.ts`, `app.config.ts`).
- **Auth/identification area:** `src/app/identification/*` contains the team login UI and styles; admin login lives in `src/app/admin-import/*`.
- **Backend/data:** Supabase is the only backend. The Supabase client is configured from `src/environments/environment.ts` (exports `supabase` with `supabaseUrl`/`supabaseKey`). Data access goes through `src/app/services/supabase.service.ts`. SQL/schema assets live in the `sql/` and `supabase/` folders.
- **State:** `src/app/services/global.ts` (`GlobalService`, providedIn root) owns season/category/team state via BehaviorSubjects. `auth.service.ts` owns team sessions persisted in `localStorage` (key `sessionEquipe`).

**Build / Run / Test (commands)**
- Install: `npm install`
- Dev server: `npm start` (runs `ng serve`) — open http://localhost:4200/
- Production build: `npm run build` (uses Angular builder; see `angular.json` for configurations)
- Continuous dev build/watch: `npm run watch` (build watch)
- Unit tests: `npm test` (Karma)

If you need to run Angular CLI directly, use `npx ng <command>` or `npm run ng -- <args>`.

**Key conventions and patterns**
- Styles: Project-wide SCSS; default component style is `scss` (see `angular.json`). Global styles in `src/styles.scss`; components have `.scss` alongside `.ts` and `.html` (example: `src/app/identification/identification.scss`).
- Routing & config: Centralized in `src/app/app.routes.ts` and `src/app/app.config.ts` — change these for app-level navigation and feature flags.
- Season handling: The current season is read from the Supabase `Params` table using the key `SaisonCourante` (see `GlobalService.setSaison()`/`ensureSaison()`). Do NOT hard-code season values like `2025-2026`.
- Data access: Query Supabase through `supabase.service.ts` (tables such as `Params`, `Categories`, `Equipes`, `Matchs`). Prefer exact category filters (`.in(...)`) over broad queries.
- Version display: The app version is imported from `package.json` (requires `resolveJsonModule`) and shown bottom-right in the footer (`app.ts` / `app.html` / `app.scss`).

**Where to make changes vs what to avoid**
- Edit application logic in `src/app/*` and component folders. Unit tests live alongside components (`*.spec.ts`).
- Do not change `angular.json` unless adjusting build/serve settings; prefer changing per-environment config files.
- Keep Supabase credentials in `src/environments/environment.ts`. Note the `anon` key is public by design — real protection must come from Supabase Row Level Security (RLS) policies.

**Integration and data flow notes**
- Supabase: `environment.ts` provides URL/key; `supabase.service.ts` creates the client and exposes data/auth helpers; `GlobalService` consumes them and feeds components (`poule.ts`, `equipes.ts`, `matchs.ts`, `identification.ts`).

**Tests and CI**
- Unit tests use Karma (`npm test`). No CI config files (GitHub Actions) are present by default — when authoring CI workflows, use `npm test` and `npm run build` steps.

**Helpful file references (examples)**
- App entry and routing: `src/app/app.ts`, `src/app/app.routes.ts`, `src/app/app.config.ts`.
- Team auth component: `src/app/identification/identification.ts` and `identification.scss`.
- Admin area: `src/app/admin-import/admin-import.ts` / `.html` / `.scss`.
- Data access & state: `src/app/services/supabase.service.ts`, `src/app/services/global.ts`, `src/app/services/auth.service.ts`.

**When uncertain — exact checks to run before edits**
- If touching data models, confirm usage by searching imports from `src/models/models` and calls into `supabase.service.ts`.
- Before committing build-related changes, run `npm run build` locally to avoid breaking CI.
- When changing season/category loading, verify the `SaisonCourante` Params key is used and no hard-coded season remains.

If anything here is unclear or you want me to include examples of common code edits (for example: adding a route, updating a Supabase query, or wiring team/admin auth), tell me which area and I'll extend or adapt these instructions.
