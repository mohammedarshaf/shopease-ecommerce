import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Truck, RotateCcw, Headphones, ArrowUpRight } from 'lucide-react';
import { PRODUCTS, heroLifestyleImg } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const HomePage: React.FC = () => {
  // Get featured products
  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured).slice(0, 4);

  const categories = [
    {
      name: 'Electronics',
      subtitle: 'Audio, Wearables & Optics',
      count: '4 Products',
      image: PRODUCTS.find((p) => p.id === 'prod-elec-01')?.image,
      path: '/products?category=Electronics',
    },
    {
      name: 'Fashion',
      subtitle: 'Tailored Wool & Leather',
      count: '4 Products',
      image: PRODUCTS.find((p) => p.id === 'prod-fash-01')?.image,
      path: '/products?category=Fashion',
    },
    {
      name: 'Accessories',
      subtitle: 'Tuscan Leather & Acetate',
      count: '4 Products',
      image: PRODUCTS.find((p) => p.id === 'prod-acc-01')?.image,
      path: '/products?category=Accessories',
    },
    {
      name: 'Home Appliances',
      subtitle: 'Acoustic & Espresso Living',
      count: '4 Products',
      image: PRODUCTS.find((p) => p.id === 'prod-home-01')?.image,
      path: '/products?category=Home+Appliances',
    },
  ];

  return (
    <div className="space-y-20 pb-16">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 mt-6">
        <div className="absolute inset-0 z-0">
          <img
            src={heroLifestyleImg}
            alt="ShopEase modern catalog lifestyle collection"
            className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28 lg:py-32">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-medium text-emerald-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Autumn/Winter 2026 Curated Collection</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display text-balance">
              Design-Led Essentials for Modern Living.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore our masterfully engineered electronics, timeless Italian leather goods, and refined homewares built for lasting quality and quiet elegance.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white text-slate-950 rounded-xl font-semibold text-sm hover:bg-slate-100 transition-colors shadow-lg active:scale-95"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors"
              >
                Learn Our Story
              </Link>
            </div>

            {/* Quick Micro-Trust */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-emerald-400" />
                <span>Free shipping on $100+</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>2-Year Authentic Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-emerald-400" />
                <span>30-Day Hassle-Free Returns</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Popular Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
              Catalog Navigation
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-display mt-1">
              Popular Categories
            </h2>
          </div>
          <Link
            to="/products"
            className="text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1.5 transition-colors group"
          >
            <span>View all products</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.path}
              className="group relative flex flex-col justify-end h-72 rounded-2xl overflow-hidden p-6 bg-slate-900 border border-slate-200/50 shadow-xs hover:shadow-xl transition-all duration-300"
            >
              {/* Category Background Image */}
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div className="relative z-10 space-y-1">
                <span className="text-[11px] font-medium text-emerald-300 uppercase tracking-wider">
                  {cat.count}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white font-display">{cat.name}</h3>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-xs text-slate-300">{cat.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Featured Products Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
              Curated Selections
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-display mt-1">
              Featured Products
            </h2>
          </div>
          <Link
            to="/products"
            className="text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1.5 transition-colors group"
          >
            <span>Explore full catalog ({PRODUCTS.length})</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. Craftsmanship & Philosophy Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F4F4F2] border border-slate-200/80 rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
              The ShopEase Promise
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              Uncompromising Quality, Honest Pricing.
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We partner directly with specialized workshops—from Florentine leather tanners to audio engineers—cutting out superfluous intermediaries to bring you premium design without inflated markups.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-medium text-slate-700">
              <span>✓ Certified Materials</span>
              <span>·</span>
              <span>✓ Transparent Specifications</span>
              <span>·</span>
              <span>✓ 24/7 Support</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <Link
              to="/products"
              className="px-6 py-3 bg-slate-900 text-white rounded-xl text-xs font-semibold text-center hover:bg-slate-800 transition-colors shadow-sm"
            >
              Browse Catalog
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-slate-900 border border-slate-300 rounded-xl text-xs font-semibold text-center hover:bg-slate-50 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
