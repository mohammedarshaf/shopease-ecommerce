import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 text-center border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span>Complimentary insured shipping on all orders over $100</span>
          <span className="hidden sm:inline text-slate-500">·</span>
          <span className="hidden sm:inline text-emerald-400 font-medium">Use code SHOPEASE15 for 15% off</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Zone 1: Brand Wordmark */}
            <div className="flex items-center gap-6">
              <Link
                to="/"
                className="flex items-center gap-2.5 group"
                aria-label="ShopEase Home"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-sm group-hover:bg-slate-800 transition-colors">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900 font-display">
                  Shop<span className="text-emerald-600">Ease</span>
                </span>
              </Link>
            </div>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `transition-colors py-1 border-b-2 ${
                      isActive
                        ? 'text-slate-900 border-slate-900 font-semibold'
                        : 'text-slate-600 border-transparent hover:text-slate-900 hover:border-slate-300'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Zone 3: Actions (Cart & Mobile Menu Button) */}
            <div className="flex items-center gap-3">
              <Link
                to="/cart"
                className="relative p-2.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-2 group"
                aria-label={`Shopping cart with ${totalItems} items`}
              >
                <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-105" />
                <span className="hidden sm:inline text-xs font-semibold text-slate-900">Cart</span>
                {totalItems > 0 && (
                  <span className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-white bg-emerald-600 rounded-full tabular-nums shadow-sm animate-in zoom-in-50">
                    {totalItems}
                  </span>
                )}
              </Link>

              {/* Mobile menu hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-slate-100 text-slate-900 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-slate-100">
              <Link
                to="/cart"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between w-full px-3 py-2.5 text-base font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  View Shopping Cart
                </span>
                <span className="flex items-center gap-1.5 text-xs bg-slate-800 px-2.5 py-1 rounded-full tabular-nums">
                  {totalItems} items <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
