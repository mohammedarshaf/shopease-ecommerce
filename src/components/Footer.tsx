import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ShieldCheck, Truck, RefreshCw, Send, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  return (
    <footer className="bg-white border-t border-slate-200 mt-20 text-slate-600">
      {/* Trust & Guarantee Highlights Bar */}
      <div className="border-b border-slate-100 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900">Complimentary Express Shipping</h4>
                <p className="text-xs text-slate-500 mt-0.5">Free delivery on qualifying orders over $100</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900">2-Year Warranty Guaranteed</h4>
                <p className="text-xs text-slate-500 mt-0.5">Authentic products with manufacturer warranty</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900">30-Day Hassle-Free Returns</h4>
                <p className="text-xs text-slate-500 mt-0.5">Prepaid return labels and immediate refunds</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900 font-display">
                Shop<span className="text-emerald-600">Ease</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Curating elevated modern essentials across consumer electronics, refined apparel, artisan leather goods, and mindful home appliances.
            </p>
            <div className="pt-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-600">Full-Stack Web Development Capstone</span>
              <p className="mt-0.5">Demonstrating React 19, TypeScript, client-side routing, and modular component architecture.</p>
            </div>
          </div>

          {/* Catalog Categories */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-4">Categories</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/products?category=Electronics" className="hover:text-slate-900 transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/products?category=Fashion" className="hover:text-slate-900 transition-colors">
                  Fashion
                </Link>
              </li>
              <li>
                <Link to="/products?category=Accessories" className="hover:text-slate-900 transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/products?category=Home Appliances" className="hover:text-slate-900 transition-colors">
                  Home Appliances
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-slate-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-slate-900 transition-colors">
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-slate-900 transition-colors">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-slate-900 transition-colors">
                  About ShopEase
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-slate-900 transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Updates */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-4">Stay Connected</h4>
            <p className="text-xs text-slate-500 mb-3 leading-relaxed">
              Subscribe for exclusive release announcements and seasonal discount codes.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 p-2.5 bg-emerald-50 text-emerald-800 rounded-lg text-xs font-medium">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>Subscribed! Check your inbox for 15% off.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError('');
                    }}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="absolute right-1 top-1 bottom-1 px-2.5 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors flex items-center justify-center"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                {error && <p className="text-xs text-rose-500">{error}</p>}
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-10 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ShopEase E-Commerce Catalog. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Built with React 19 & Vite</span>
            <span>·</span>
            <span>Client-Side Routing</span>
            <span>·</span>
            <span>LocalStorage Cart</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
