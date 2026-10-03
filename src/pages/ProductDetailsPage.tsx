import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/ProductCard';
import {
  Star,
  ShoppingBag,
  ArrowLeft,
  Truck,
  ShieldCheck,
  RotateCcw,
  Check,
  Minus,
  Plus,
  Share2,
} from 'lucide-react';

export const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = PRODUCTS.find((p) => p.id === id);

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string>(
    product?.colors ? product.colors[0] : ''
  );
  const [imageError, setImageError] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 font-display">Product Not Found</h2>
        <p className="text-sm text-slate-500">
          The requested product could not be found or may have been discontinued.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Catalog
        </Link>
      </div>
    );
  }

  // Related products from the same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-500">
        <Link to="/" className="hover:text-slate-900 transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link to="/products" className="hover:text-slate-900 transition-colors">
          Products
        </Link>
        <span>/</span>
        <Link
          to={`/products?category=${encodeURIComponent(product.category)}`}
          className="hover:text-slate-900 transition-colors"
        >
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-medium truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main Contiguous Purchase Grid (Sticky Gallery Left / Contiguous Purchase Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left: Product Showcase Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#F6F6F4] border border-slate-200">
            {!imageError ? (
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-slate-100">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  {product.category}
                </span>
                <p className="mt-2 text-lg font-bold text-slate-800">{product.name}</p>
              </div>
            )}

            {product.badge && (
              <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-900 border border-slate-200 shadow-xs">
                {product.badge}
              </div>
            )}
          </div>

          {/* Quick Trust Badges below photo */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-center">
              <Truck className="w-4 h-4 text-emerald-600 mb-1" />
              <span className="text-[11px] font-semibold text-slate-900">Complimentary</span>
              <span className="text-[10px] text-slate-500">Shipping on $100+</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-center">
              <ShieldCheck className="w-4 h-4 text-emerald-600 mb-1" />
              <span className="text-[11px] font-semibold text-slate-900">2-Yr Warranty</span>
              <span className="text-[10px] text-slate-500">100% Authentic</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-center">
              <RotateCcw className="w-4 h-4 text-emerald-600 mb-1" />
              <span className="text-[11px] font-semibold text-slate-900">30-Day Returns</span>
              <span className="text-[10px] text-slate-500">Hassle-Free</span>
            </div>
          </div>
        </div>

        {/* Right: Contiguous Purchase Module */}
        <div className="space-y-6">
          {/* Category & Ratings */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
              {product.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs">
              <div className="flex items-center text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <span className="font-semibold text-slate-900 tabular-nums">{product.rating}</span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-600">{product.reviewsCount} customer reviews</span>
            </div>
          </div>

          {/* Product Title & Tagline */}
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              {product.name}
            </h1>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{product.tagline}</p>
          </div>

          {/* Price Header */}
          <div className="flex items-baseline gap-3 pb-6 border-b border-slate-200">
            <span className="text-3xl font-extrabold text-slate-900 tabular-nums">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <>
                <span className="text-base text-slate-400 line-through tabular-nums">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              </>
            )}
          </div>

          {/* Color Selector (if available) */}
          {product.colors && product.colors.length > 0 && (
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-900 block">
                Finish / Variant: <span className="font-normal text-slate-600">{selectedColor}</span>
              </span>
              <div className="flex items-center gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                      selectedColor === color
                        ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity and Add to Cart Section */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold text-slate-900">Quantity:</span>
              <div className="flex items-center border border-slate-300 rounded-lg bg-white overflow-hidden shadow-2xs">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-40 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center text-xs font-bold text-slate-900 tabular-nums">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                  disabled={quantity >= product.stockCount}
                  className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-40 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <span className="text-xs text-slate-500">
                {product.inStock ? (
                  <span className="text-emerald-700 font-medium">
                    ✓ In Stock ({product.stockCount} units available)
                  </span>
                ) : (
                  <span className="text-rose-600 font-medium">Out of stock</span>
                )}
              </span>
            </div>

            {/* Main Action Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`flex-1 py-3.5 px-6 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm ${
                  !product.inStock
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : isAdded
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-900 text-white hover:bg-slate-800 active:scale-[0.99]'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" /> Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart · ${(product.price * quantity).toFixed(2)}</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleShare}
                className="p-3.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
                title="Share link"
                aria-label="Share product link"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>

            {copiedLink && (
              <p className="text-xs text-emerald-600 font-medium animate-in fade-in">
                Link copied to clipboard!
              </p>
            )}
          </div>

          {/* Description Prose */}
          <div className="pt-6 border-t border-slate-200 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
              Overview & Craftsmanship
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">{product.description}</p>
          </div>

          {/* Feature Highlights List */}
          {product.features && product.features.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
                Key Highlights
              </h3>
              <ul className="space-y-2">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Specifications Table */}
          {product.specs && (
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
                Technical Specifications
              </h3>
              <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
                {Object.entries(product.specs).map(([key, value], idx) => (
                  <div
                    key={key}
                    className={`flex items-center justify-between p-3 ${
                      idx % 2 === 0 ? 'bg-slate-50/70' : 'bg-white'
                    }`}
                  >
                    <span className="font-medium text-slate-600">{key}</span>
                    <span className="font-semibold text-slate-900 text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="pt-10 border-t border-slate-200 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                Complementary Selections
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mt-0.5">
                Related in {product.category}
              </h3>
            </div>
            <Link
              to={`/products?category=${encodeURIComponent(product.category)}`}
              className="text-xs font-semibold text-slate-700 hover:text-slate-900"
            >
              View More
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
