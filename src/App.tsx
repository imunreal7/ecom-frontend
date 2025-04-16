import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import CategoriesPage from './pages/CategoriesPage';
import { LayoutDashboard, Boxes } from 'lucide-react';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="navbar">
          <div className="navbar-inner">
            <h1 className="logo">Inventory Manager</h1>
            <nav className="nav-links">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                <Boxes className="icon" /> Products
              </NavLink>
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                <LayoutDashboard className="icon" /> Categories
              </NavLink>
            </nav>
          </div>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
