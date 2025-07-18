Clontra Project
A full-stack e-commerce web application with a React frontend and Node.js/Express backend.

Project Structure
clontra/
├── backend/
│   ├── package.json
│   ├── server.js
│   ├── controller/
│   ├── public/
│   └── routes/
└── my-clontra/
    ├── package.json
    ├── vite.config.js
    ├── public/
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── components/
        ├── layout/
        ├── pages/
        ├── redux/
        ├── routes/
        └── services/

        
Backend (backend)
Node.js + Express server
API endpoints for products, categories, brands, etc.
Controllers and routes for main API and navigation

Example endpoint:
GET /myclontra/api/product/filter (returns all products for filtering)
GET /myclontra/api/product?category=... (returns products by category)


To Run Backend
cd backend
npm install
node server.js


Frontend (my-clontra)
React (with Vite)
Modern component structure:
components/ (UI components, navigation, product cards, etc.)
pages/ (Category, Home, Product, Search, NotFound, etc.)
services/ (API calls)
redux/ (state management, if used)
Responsive sidebar for categories/brands
Product listing page
Styled with CSS modules and custom styles

To Run Frontend
cd my-clontra
npm install
npm run dev


Features
Browse products by category and brand
Sidebar with scrollable, sticky filter section
Product details and listing
Modular, maintainable codebase


Development
Backend runs on localhost:2000
Frontend runs on localhost:5173 (default Vite port)
Update API URLs in frontend services if backend port changes


Folder Highlights
controller — Express controllers for API logic
routes — Express route definitions
components — Reusable React components
pages — Page-level React components
services — API service functions
