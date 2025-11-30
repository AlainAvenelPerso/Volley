<!-- GitHub Copilot instructions for working with the Volley repo -->
# Repo-specific guidance for AI coding agents

This file gives focused, actionable guidance to AI coding agents working on the Volley Angular/Firebase project. Keep suggestions specific to files and patterns actually present in this repo.

**Project Overview:**
- **Type:** Angular 20 application (root project `volley`). See `angular.json` and `package.json`.
- **Frontend entry:** `src/main.ts`, app code lives in `src/app` (see `app.ts`, `app.routes.ts`, `app.config.ts`).
- **Auth/identification area:** `src/app/identification/*` contains the identification UI and styles.
- **Data integration:** `dataconnect/` contains connector source (`.yaml`, `.gql`) and `src/dataconnect-generated/` contains generated artifacts (CJS/ESM). Treat `dataconnect-generated` as generated code—avoid manual edits.
- **Backend/data:** Firebase is used via `@angular/fire` and `firebase` packages; repo includes `firebase.json`, `firestore.rules`, and `firestore-data/` exports.

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
- Generated code: `src/dataconnect-generated/` and `src/dataconnect-generated/angular/` are outputs from the dataconnect generator. To update GraphQL schema/queries, edit `dataconnect/schema/*.gql`, `dataconnect/seed_data.gql` or files in `dataconnect/example/` and re-run the generator (no generator script is present here — ask the repo owner for the exact generator command before attempting).
- Firebase config: Runtime Firebase settings are stored in `src/environments/environment.ts` (not committed with secrets). Use Firebase JSON files (`firebase.json`, `firestore.rules`) for deployments and rules updates.

**Where to make changes vs what to avoid**
- Edit application logic in `src/app/*` and component folders. Unit tests live alongside components (`*.spec.ts`).
- Edit `dataconnect/*` source files for GraphQL or connector changes. Do NOT hand-edit `src/dataconnect-generated/*`—it's generated.
- Do not change `angular.json` unless adjusting build/serve settings; prefer changing per-environment config files.

**Integration and data flow notes**
- GraphQL / dataconnect: `dataconnect/*.yaml` and `*.gql` files define connectors and schema; generated JS lives in `src/dataconnect-generated`. Changes propagate to the app via imports from `dataconnect-generated`.
- Firebase: `@angular/fire` is used to integrate with Firestore/auth — look for imports from `@angular/fire` in `src/app` to find integration points.

**Tests and CI**
- Unit tests use Karma (`npm test`). No CI config files (GitHub Actions) are present by default — when authoring CI workflows, use `npm test` and `npm run build` steps.

**Helpful file references (examples)**
- App entry and routing: `src/app/app.ts`, `src/app/app.routes.ts`, `src/app/app.config.ts`.
- Auth component: `src/app/identification/identification.ts` and `identification.scss`.
- Generated API: `src/dataconnect-generated/index.cjs.js` and `src/dataconnect-generated/esm/index.esm.js`.
- GraphQL source/schema: `dataconnect/schema/schema.gql`, `dataconnect/seed_data.gql`, `dataconnect/example/*.gql`.

**When uncertain — exact checks to run before edits**
- If touching data models, confirm where the model is used: search for imports from `dataconnect-generated`.
- Before committing build-related changes, run `npm run build` locally to avoid breaking CI.
- If you need to update generated code, ask repo owner for the generator command or workflow; do not directly modify `src/dataconnect-generated`.

If anything here is unclear or you want me to include examples of common code edits (for example: adding a route, updating a GraphQL query, or wiring Firebase auth), tell me which area and I'll extend or adapt these instructions.
