# 🛍️ MyStore Frontend (React + TypeScript + Vite)

This is the frontend application for the MyStore project, built with React, TypeScript, and Vite.

## Screenshots

## Categories

![Categories](/public/screenshots/categories.png)

## Products

![products](/public/screenshots/products.png)

## 📋 Prerequisites

- Node.js (v18+)
- Backend server running on http://localhost:3000

## 🚀 Project Setup

Clone the repository and install dependencies:

```bash
npm install
```

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```bash
VITE_API_URL=http://localhost:3000
```

## 🧪 Run the App

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## 🔄 Build

To create a production build:

```bash
npm run build
```

## 🧼 Linting

```bash
npm run lint
```

## 🧪 Testing

You can integrate testing libraries like React Testing Library and run tests as needed.

## 📁 Project Structure

- `src/`: Source code directory
  - `components/`: Reusable React components
  - `pages/`: Application pages (e.g., Product list, Categories)
  - `services/`: API request handling

## ✅ Features

- Product listing from backend
- Category display
- Axios for API calls
- CORS handled from backend

This template is based on the official Vite + React + TypeScript starter with added integration for a full-stack setup.