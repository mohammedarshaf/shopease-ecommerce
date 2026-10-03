import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star, Eye, Check } from 'lucide-react';
import { Product } from '../types/product';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [imageError, setImageError] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className="group relative flex flex-col bg-white rounded-xl border border-slate-200/80 overflow-hidden hover:border-slate-300 hover:shadow-lg transition-all duration-300 ease-out hover:-translate-y-1">
      {/* Product Image Container */}
      <Link
        to={`/product/${product.id}`}
        className="relative block aspect-[4/3] w-full overflow-hidden bg-[#F6F6F4]"
      >
        {!imageError ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-slate-100 p-4 text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              {product.category}
            </span>
            <p className="mt-1 text-sm font-medium text-slate-700">{product.name}</p>
          </div>
        )}

        {/* Subtle Tag (Maximum 1 subtle tag, never pill cluster) */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 text-[11px] font-semibold tracking-wider text-slate-900 uppercase border border-slate-200/60 shadow-xs">
            {product.badge}
          </div>
        )}

        {/* Quick View Overlay Button */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 pointer-events-none">
          <span className="pointer-events-auto bg-white/95 text-slate-900 text-xs font-medium px-3.5 py-2 rounded-lg shadow-md flex items-center gap-1.5 hover:bg-white transition-colors">
            <Eye className="w-3.5 h-3.5" /> Quick View
          </span>
        </div>
      </Link>

      {/* Content Details */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {/* Unboxed Metadata Header */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
          <span className="font-medium text-slate-600">{product.category}</span>
          <div className="flex items-center gap-1 text-slate-700">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="font-semibold tabular-nums">{product.rating}</span>
            <span className="text-slate-400">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Product Title */}
        <h3 className="text-sm sm:text-base font-semibold text-slate-900 line-clamp-1 group-hover:text-emerald-700 transition-colors">
          <Link to={`/product/${product.id}`}>
            {product.name}
          </Link>
        </h3>

        {/* Short Tagline / Excerpt */}
        <p className="mt-1 text-xs text-slate-500 line-clamp-2 leading-relaxed">
          {product.tagline || product.description}
        </p>

        {/* Price & Action Button Footer */}
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-100">
          <div className="flex items-baseline gap-2">
            <span className="text-base sm:text-lg font-bold text-slate-900 tabular-nums">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs text-slate-400 line-through tabular-nums">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            onClick={handleQuickAdd}
            disabled={!product.inStock}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
              !product.inStock
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                : isAdded
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm active:scale-95'
            }`}
            title={product.inStock ? 'Add item to cart' : 'Out of stock'}
            aria-label={`Add ${product.name} to cart`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5" /> Added
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
