🥗 ## ChowNow Frontend

The ChowNow Frontend is a modern, high-performance web interface for the ChowNow food ordering platform.
It enables users to browse restaurants, explore menus, manage accounts, and place orders — all through a seamless, responsive, and accessible UI.

Built with React 19, Vite, and Tailwind CSS, this frontend delivers a fast, modern user experience integrated with the ChowNow Backend.

🚀 ## Tech Stack

Core Frameworks

React 19

Vite 7

TypeScript 5

Tailwind CSS 4

Libraries & Tools

Auth0 for authentication (@auth0/auth0-react)

React Query for server state management

React Hook Form + Zod for form validation

Radix UI + Lucide Icons for accessible UI components

Sonner for toasts/notifications

React Router v7 for routing

📂 ## Project Structure
frontend/
├── src/
│   ├── assets/            # Static assets
│   ├── components/        # Reusable UI components
│   ├── features/          # Feature-specific components (e.g., menu, cart)
│   ├── hooks/             # Custom hooks
│   ├── layouts/           # Page layouts
│   ├── pages/             # Route pages (Home, Restaurant, Cart, etc.)
│   ├── providers/         # QueryClientProvider, ThemeProvider, etc.
│   ├── utils/             # Helper functions
│   └── main.tsx           # App entry point
├── index.html
├── package.json
├── tailwind.config.js
└── tsconfig.json

⚙️ ## Setup Instructions
1. Clone the repository
git clone https://github.com/<your-username>/chownow.git
cd chownow/frontend

2. Install dependencies
npm install

3. Environment Variables

Create a .env file in the frontend/ root:

VITE_API_URL=http://localhost:5000        # Backend API base URL
VITE_AUTH0_DOMAIN=your-auth0-domain
VITE_AUTH0_CLIENT_ID=your-auth0-client-id
VITE_AUTH0_AUDIENCE=your-auth0-audience

4. Start the development server
npm run dev


Access the app at http://localhost:5173

🧩 ## Available Scripts
Command	Description
npm run dev	Start the development server
npm run build	Build for production
npm run preview	Preview production build locally
npm run lint	Run ESLint on the codebase
🧠 Features

🔐 Auth0 Authentication — Secure login & signup

🏪 Restaurant Listing — Browse restaurants & menus

🛒 Cart & Checkout — Add meals and place orders

💳 Payment Ready — Designed for Stripe integration

🎨 Modern UI — Built with Radix, Tailwind, and Lucide Icons

⚡ Optimized State Management — via React Query and hooks

🧱 ## Integration with Backend

The frontend interacts with the ChowNow Backend
 via REST APIs for:

User authentication (JWT or Auth0 tokens)

Menu and restaurant data

Order creation and management

Image retrieval from Cloudinary

🧾 ## License

This project is licensed under the ISC License.
