import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CartItem } from '../components/CartItem';
import { CheckoutModal } from '../components/CheckoutModal';
import {
  ShoppingBag,
  ArrowRight,
  Trash2,
  Tag,
  ShieldCheck,
  Truck,
  RotateCcw,
  CheckCircle2,
} from 'lucide-react';

export const CartPage: React.FC = () => {
  const {
    cart,
    totalItems,
    subtotal,
    shipping,
    tax,
    promoDiscount,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    grandTotal,
    clearCart,
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [couponMsg, setCouponMsg] = useState<{ text: string; error: boolean } | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const freeShippingThreshold = 100;
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;

    const res = applyCoupon(couponInput);
    if (res.success) {
      setCouponMsg({ text: res.message, error: false });
      setCouponInput('');
    } else {
      setCouponMsg({ text: res.message, error: true });
    }
  };

  // If cart is empty
  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 mx-auto">
          <ShoppingBag className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
            Your shopping cart is empty
          </h2>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            Discover our curated collection of lifestyle audio, designer outerwear, and modern homewares.
          </p>
        </div>
        <div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors shadow-sm"
          >
            <span>Explore Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Title & Item Count Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
            Shopping Cart
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Review your selected items ({totalItems} total pieces)
          </p>
        </div>

        <button
          onClick={clearCart}
          className="text-xs text-slate-500 hover:text-rose-600 transition-colors flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Empty Entire Cart</span>
        </button>
      </div>

      {/* Free Shipping Progress Notification */}
      <div className="p-4 bg-emerald-50 border border-emerald-200/80 rounded-2xl space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-emerald-950 flex items-center gap-1.5">
            <Truck className="w-4 h-4 text-emerald-700" />
            {amountNeededForFreeShipping === 0
              ? 'Congratulations! You unlocked Free Express Shipping'
              : `Add $${amountNeededForFreeShipping.toFixed(2)} more for Free Express Shipping`}
          </span>
          <span className="font-bold text-emerald-800 tabular-nums">
            {freeShippingProgress.toFixed(0)}%
          </span>
        </div>
        <div className="w-full bg-emerald-200/60 rounded-full h-1.5 overflow-hidden">
          <div
            className="bg-emerald-600 h-1.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${freeShippingProgress}%` }}
          />
        </div>
      </div>

      {/* Main Cart Grid: Item List (Left) + Order Summary (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Cart Items List */}
        <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs divide-y divide-slate-100">
          <div className="hidden sm:flex items-center justify-between text-xs font-semibold text-slate-400 pb-3 uppercase tracking-wider">
            <span>Product</span>
            <div className="flex items-center gap-16">
              <span>Unit Price</span>
              <span>Quantity</span>
              <span>Total</span>
            </div>
          </div>

          <div className="space-y-1">
            {cart.map((item) => (
              <CartItem
                key={`${item.product.id}-${item.selectedColor || ''}`}
                item={item}
              />
            ))}
          </div>

          {/* Quick Continue Shopping Link */}
          <div className="pt-4 flex items-center justify-between">
            <Link
              to="/products"
              className="text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1"
            >
              <span>← Continue Shopping</span>
            </Link>
            <span className="text-xs text-slate-400">
              Cart auto-saved in your browser LocalStorage
            </span>
          </div>
        </div>

        {/* Order Summary Card */}
        <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-6">
          <h2 className="text-base font-bold text-slate-900 font-display">Order Summary</h2>

          {/* Pricing breakdown */}
          <div className="space-y-3 text-xs border-b border-slate-100 pb-4">
            <div className="flex justify-between text-slate-600">
              <span>Subtotal ({totalItems} items)</span>
              <span className="font-semibold text-slate-900 tabular-nums">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            {promoDiscount > 0 && (
              <div className="flex justify-between text-emerald-700 font-medium">
                <span>Promo Discount ({appliedCoupon})</span>
                <span className="tabular-nums">-${promoDiscount.toFixed(2)}</span>
              </div>
            )}

            <div className="flex justify-between text-slate-600">
              <span className="flex items-center gap-1">
                <span>Estimated Shipping</span>
                {shipping === 0 && (
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-1.5 rounded">
                    FREE
                  </span>
                )}
              </span>
              <span className="font-semibold text-slate-900 tabular-nums">
                {shipping === 0 ? '$0.00' : `$${shipping.toFixed(2)}`}
              </span>
            </div>

            <div className="flex justify-between text-slate-600">
              <span>Estimated Sales Tax (7%)</span>
              <span className="font-semibold text-slate-900 tabular-nums">
                ${tax.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Grand Total */}
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-sm font-bold text-slate-900">Total Due</span>
              <p className="text-[11px] text-slate-400">Includes applicable taxes and duties</p>
            </div>
            <span className="text-2xl font-extrabold text-slate-900 tabular-nums">
              ${grandTotal.toFixed(2)}
            </span>
          </div>

          {/* Promo Code Input */}
          <div className="pt-2 border-t border-slate-100 space-y-2">
            <span className="text-xs font-semibold text-slate-700 block">Promo Code</span>
            {appliedCoupon ? (
              <div className="flex items-center justify-between p-2.5 bg-emerald-50 rounded-lg text-xs text-emerald-800 border border-emerald-200">
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Coupon {appliedCoupon} applied</span>
                </div>
                <button
                  type="button"
                  onClick={removeCoupon}
                  className="text-xs text-emerald-900 underline hover:text-emerald-700"
                >
                  Remove
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    placeholder="Try SHOPEASE15"
                    className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white uppercase"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Apply
                </button>
              </form>
            )}

            {couponMsg && !appliedCoupon && (
              <p
                className={`text-xs ${
                  couponMsg.error ? 'text-rose-500' : 'text-emerald-600'
                }`}
              >
                {couponMsg.text}
              </p>
            )}
          </div>

          {/* Checkout CTA */}
          <button
            type="button"
            onClick={() => setIsCheckoutOpen(true)}
            className="w-full py-3.5 px-4 bg-slate-900 text-white rounded-xl font-semibold text-sm hover:bg-slate-800 transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
          >
            <span>Proceed to Checkout</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Security guarantee indicators */}
          <div className="pt-2 flex flex-col gap-2 text-[11px] text-slate-500 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Simulated 256-bit encrypted checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-emerald-600" />
              <span>30-day effortless return guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </div>
  );
};
