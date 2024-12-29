# Phase 1: Foundational Setup

## Objectives
Establish a fully functional development environment, define the technical foundation, and create the initial structure of the Kaizen Planning SaaS application to enable efficient development in later phases.

---

## Tasks and Details

### 1. **Tech Stack Setup**
#### Next.js Environment
- Create the base project:
  ```bash
  npx create-next-app@latest kaizen-planning
  cd kaizen-planning
  ```
- Configure TypeScript for better type safety:
  ```bash
  touch tsconfig.json
  pnpm add -D typescript @types/react @types/node
  ```
- Install essential dependencies:
  ```bash
  pnpm add axios react-query dotenv
  pnpm add tailwindcss postcss autoprefixer
  npx tailwindcss init
  ```
- Update `tailwind.config.js`:
  ```javascript
  module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  ```
- Add a `globals.css` file in `/styles` and include Tailwind’s base, components, and utilities:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

#### MongoDB Atlas Configuration
- Create a MongoDB Atlas account and set up a cluster.
- Add a database named `kaizen_planning` and a `tasks` collection.
- Whitelist your IP and obtain the connection string.
- Add the MongoDB connection string to `.env.local`:
  ```env
  MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/kaizen_planning?retryWrites=true&w=majority
  ```
- Install MongoDB library for interaction:
  ```bash
  pnpm add mongodb
  ```

#### Environment Variables
- Add environment variable placeholders to `.env.local`:
  ```env
  GOOGLE_CLIENT_ID=your_google_client_id
  GOOGLE_CLIENT_SECRET=your_google_client_secret
  NEXT_PUBLIC_APP_URL=http://localhost:3000
  ```

### 2. **Core Pages Setup**
#### Landing Page (`/pages/index.tsx`)
- Content:
  - A brief explanation of the Kaizen methodology.
  - A call-to-action button linking to the dashboard.
- Example layout:
  ```jsx
  export default function Home() {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Kaizen Planning</h1>
        <p className="mt-4">Streamline your tasks and achieve more with Kaizen.</p>
        <button className="mt-8 px-6 py-2 bg-blue-500 text-white rounded">Get Started</button>
      </div>
    );
  }
  ```

#### Dashboard Page (`/pages/dashboard.tsx`)
- Content:
  - User interface for navigating planning features.
  - Placeholder links for steps like "Materialize Thoughts" and "Preview Plan."

### 3. **Version Control**
- Initialize Git:
  ```bash
  git init
  git remote add origin <repository-url>
  git add .
  git commit -m "Initial project setup"
  git push -u origin main
  ```
- Use branch naming conventions (e.g., `feature/setup`, `feature/ui-components`).

### 4. **Development Workflow**
- Configure Prettier and ESLint:
  ```bash
  pnpm add -D prettier eslint eslint-config-prettier eslint-plugin-prettier
  ```
- Add `.prettierrc` and `.eslintrc.js` for consistent code formatting:
  - `.prettierrc`:
    ```json
    {
      "semi": true,
      "singleQuote": true
    }
    ```
  - `.eslintrc.js`:
    ```javascript
    module.exports = {
      extends: ["eslint:recommended", "plugin:react/recommended"],
      settings: {
        react: {
          version: "detect",
        },
      },
    };
    ```

### 5. **Basic Components**
- Create reusable components in `/components`:
  - **Header**: Navigation bar for switching between pages.
  - **Button**: Standardized button styles.
  - **ProgressIndicator**: Visual indicator for step-by-step progress.

---

## Deliverables
1. Fully configured Next.js environment with TypeScript and Tailwind CSS.
2. MongoDB Atlas connected and ready for data storage.
3. Landing page and dashboard with responsive design.
4. Initialized Git repository with proper workflows.
5. Environment ready for Phase 2 (Core Features Development).
