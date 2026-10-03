import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 mx-auto">
        <ShoppingBag className="w-8 h-8" />
      </div>
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-rose-600">
          404 Error
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 font-display">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-500">
          The page or product you are attempting to view does not exist or has been relocated.
        </p>
      </div>
      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
};
