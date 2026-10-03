import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight, ShieldCheck, Heart, Sparkles, Code2, Layers, Cpu } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Sparkles,
      title: 'Mindful Curation',
      desc: 'We reject disposable fast consumption. Every product in the ShopEase catalog is evaluated for timeless utility, tactile longevity, and repairability.',
    },
    {
      icon: ShieldCheck,
      title: 'Direct-to-Maker Pricing',
      desc: 'By working directly with certified workshops in Italy, Portugal, and premier domestic creators, we eliminate middle-tier retail markups.',
    },
    {
      icon: Heart,
      title: 'Responsible Materials',
      desc: 'From OEKO-TEX certified Australian wool to Mazzucchelli cellulose acetate and vegetable-tanned Tuscan leather, provenance matters.',
    },
  ];

  const technicalHighlights = [
    {
      title: 'Modular React 19 Architecture',
      desc: 'Separation of concerns across reusable UI components, centralized context state, and isolated view layers.',
    },
    {
      title: 'Client-Side Routing',
      desc: 'Fluid client navigation utilizing React Router v7 with zero full-page reloads and deep URL parameter state synchronization.',
    },
    {
      title: 'LocalStorage Persistence',
      desc: 'Deterministic cart synchronization ensuring user items and quantity selections survive tab refreshes and browser restarts.',
    },
    {
      title: 'Responsive & Accessible',
      desc: 'Tailwind CSS utility framework engineered for seamless mobile-to-desktop viewports conforming to WCAG contrast standards.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-20">
      {/* Brand Mission Hero */}
      <div className="max-w-3xl space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700">
          <span>About ShopEase</span>
          <span>·</span>
          <span>Established 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display text-balance">
          Bridging artisanal craftsmanship with clean modern utility.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          ShopEase was conceived as an antidote to cluttered, discount-driven online marketplaces. We curate design-forward electronics, tailored apparel, handcrafted leather goods, and refined homewares designed to enrich daily routines.
        </p>
      </div>

      {/* Brand Values Grid */}
      <section className="space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
            Our Guiding Principles
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.title}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-display">{val.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Capstone Project Technical Architecture Section */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-14 space-y-8">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            <Code2 className="w-4 h-4" />
            <span>Capstone Engineering Specifications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Architecture & Technology Stack
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            This application is engineered as a comprehensive Full-Stack Web Development Capstone Project. It strictly adheres to modern frontend engineering conventions, client routing invariants, and performant state synchronization.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {technicalHighlights.map((tech) => (
            <div
              key={tech.title}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2 backdrop-blur-xs"
            >
              <h4 className="text-sm font-semibold text-white font-display">{tech.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center space-y-4 max-w-lg mx-auto pt-6">
        <h3 className="text-2xl font-bold text-slate-900 font-display">
          Ready to experience ShopEase?
        </h3>
        <p className="text-xs text-slate-500">
          Explore our complete catalog or connect directly with our support team.
        </p>
        <div className="flex items-center justify-center gap-4 pt-2">
          <Link
            to="/products"
            className="px-6 py-3 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors shadow-sm flex items-center gap-2"
          >
            <span>Browse Products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-white text-slate-900 border border-slate-300 rounded-xl text-xs font-semibold hover:bg-slate-50 transition-colors"
          >
            Contact Team
          </Link>
        </div>
      </div>
    </div>
  );
};
