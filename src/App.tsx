import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { PageLoader } from './components/PageLoader';
import { ToastContainer } from './components/ToastContainer';

// Route-based code splitting using React.lazy()
const HomePage = lazy(() =>
  import('./pages/HomePage').then((module) => ({ default: module.HomePage }))
);
const ProductsPage = lazy(() =>
  import('./pages/ProductsPage').then((module) => ({ default: module.ProductsPage }))
);
const ProductDetailsPage = lazy(() =>
  import('./pages/ProductDetailsPage').then((module) => ({ default: module.ProductDetailsPage }))
);
const CartPage = lazy(() =>
  import('./pages/CartPage').then((module) => ({ default: module.CartPage }))
);
const AboutPage = lazy(() =>
  import('./pages/AboutPage').then((module) => ({ default: module.AboutPage }))
);
const ContactPage = lazy(() =>
  import('./pages/ContactPage').then((module) => ({ default: module.ContactPage }))
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage }))
);

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-slate-900 font-sans">
          <ScrollToTop />
          <Navbar />

          <main className="flex-1">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/product/:id" element={<ProductDetailsPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />
          <ToastContainer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
