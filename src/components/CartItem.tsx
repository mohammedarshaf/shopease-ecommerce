import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types/product';
import { useCart } from '../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const [imageError, setImageError] = useState(false);
  const { product, quantity, selectedColor } = item;

  const itemTotal = product.price * quantity;

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4 border-b border-slate-200">
      {/* Product Image & Info */}
      <div className="flex items-center gap-4 flex-1">
        <Link
          to={`/product/${product.id}`}
          className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-200"
        >
          {!imageError ? (
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[10px] text-slate-400 p-2 text-center">
              {product.name}
            </div>
          )}
        </Link>

        <div className="space-y-1">
          <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
            {product.category}
          </span>
          <h4 className="text-sm font-semibold text-slate-900 hover:text-emerald-700 transition-colors">
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </h4>
          {selectedColor && (
            <p className="text-xs text-slate-500">
              Color: <span className="font-medium text-slate-700">{selectedColor}</span>
            </p>
          )}
          <p className="text-xs font-semibold text-slate-700 sm:hidden tabular-nums">
            ${product.price.toFixed(2)} each
          </p>
        </div>
      </div>

      {/* Pricing and Controls */}
      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
        {/* Unit Price (Desktop) */}
        <div className="hidden sm:block text-right">
          <span className="text-xs text-slate-400 block">Unit Price</span>
          <span className="text-sm font-medium text-slate-700 tabular-nums">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {/* Quantity Stepper */}
        <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden shadow-2xs">
          <button
            type="button"
            onClick={() => updateQuantity(product.id, quantity - 1, selectedColor)}
            className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors disabled:opacity-40"
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="w-8 text-center text-xs font-semibold text-slate-900 tabular-nums">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => updateQuantity(product.id, quantity + 1, selectedColor)}
            className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors disabled:opacity-40"
            disabled={quantity >= product.stockCount}
            aria-label="Increase quantity"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Line Subtotal */}
        <div className="text-right min-w-[75px]">
          <span className="text-xs text-slate-400 block sm:hidden">Total</span>
          <span className="text-sm sm:text-base font-bold text-slate-900 tabular-nums">
            ${itemTotal.toFixed(2)}
          </span>
        </div>

        {/* Remove Button */}
        <button
          type="button"
          onClick={() => removeFromCart(product.id, selectedColor)}
          className="p-2 text-slate-400 hover:text-rose-600 transition-colors rounded-lg hover:bg-rose-50"
          aria-label={`Remove ${product.name} from cart`}
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
