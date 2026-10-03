import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, CheckCircle2, ShieldCheck, CreditCard, Truck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { cart, grandTotal, subtotal, shipping, tax, promoDiscount, clearCart } = useCart();
  
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [orderId, setOrderId] = useState('');

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cod'>('card');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Full name is required';
    if (!email.trim() || !email.includes('@')) newErrors.email = 'Valid email is required';
    if (!address.trim()) newErrors.address = 'Street address is required';
    if (!city.trim()) newErrors.city = 'City is required';
    if (!postalCode.trim()) newErrors.postalCode = 'Postal code is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedId = `SE-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderId(generatedId);
      setIsSubmitting(false);
      setStep('success');
      clearCart();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-[#FAFAFA]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <h3 className="text-base font-semibold text-slate-900">
              {step === 'form' ? 'Secure Checkout' : 'Order Confirmed'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 transition-colors p-1 rounded-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handlePlaceOrder} className="p-6 space-y-4">
            {/* Order total header */}
            <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-xs">
              <span className="text-slate-600">Order Summary ({cart.length} unique items)</span>
              <span className="text-sm font-bold text-slate-900 tabular-nums">
                Total: ${grandTotal.toFixed(2)}
              </span>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                1. Shipping Information
              </h4>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className={`w-full px-3 py-2 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 ${
                    errors.name ? 'border-rose-400' : 'border-slate-300'
                  }`}
                />
                {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@example.com"
                  className={`w-full px-3 py-2 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 ${
                    errors.email ? 'border-rose-400' : 'border-slate-300'
                  }`}
                />
                {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Street Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="123 Market St, Suite 400"
                  className={`w-full px-3 py-2 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 ${
                    errors.address ? 'border-rose-400' : 'border-slate-300'
                  }`}
                />
                {errors.address && <p className="text-xs text-rose-500 mt-1">{errors.address}</p>}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">City</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="San Francisco"
                    className={`w-full px-3 py-2 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 ${
                      errors.city ? 'border-rose-400' : 'border-slate-300'
                    }`}
                  />
                  {errors.city && <p className="text-xs text-rose-500 mt-1">{errors.city}</p>}
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Postal Code</label>
                  <input
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="94103"
                    className={`w-full px-3 py-2 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 ${
                      errors.postalCode ? 'border-rose-400' : 'border-slate-300'
                    }`}
                  />
                  {errors.postalCode && <p className="text-xs text-rose-500 mt-1">{errors.postalCode}</p>}
                </div>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                2. Payment Method
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                    paymentMethod === 'card'
                      ? 'border-slate-900 bg-slate-50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-slate-800" />
                    <span className="text-xs font-semibold text-slate-900">Credit / Debit</span>
                  </div>
                  <span className="text-[11px] text-slate-500">Simulated 256-bit SSL</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-3 rounded-xl border text-left flex flex-col gap-1 transition-all ${
                    paymentMethod === 'cod'
                      ? 'border-slate-900 bg-slate-50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-slate-800" />
                    <span className="text-xs font-semibold text-slate-900">Cash on Delivery</span>
                  </div>
                  <span className="text-[11px] text-slate-500">Pay upon parcel delivery</span>
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 bg-slate-900 text-white rounded-xl font-semibold text-sm hover:bg-slate-800 transition-colors shadow-sm disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Processing Order...</span>
                ) : (
                  <>
                    <span>Confirm & Place Order (${grandTotal.toFixed(2)})</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
              <p className="text-center text-[11px] text-slate-400 mt-2">
                This is a secure simulated demonstration for the Full-Stack Capstone Project.
              </p>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-display">Thank you for your order!</h3>
              <p className="text-xs text-slate-500 mt-1">
                Order confirmation and tracking details sent to{' '}
                <span className="font-semibold text-slate-700">{email || 'your email'}</span>.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 text-left space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Order Reference:</span>
                <span className="font-bold text-slate-900 tabular-nums">#{orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Estimated Delivery:</span>
                <span className="font-medium text-slate-900">3–5 Business Days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Payment Status:</span>
                <span className="font-medium text-emerald-700">
                  {paymentMethod === 'card' ? 'Payment Approved' : 'Cash on Delivery Verified'}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/products"
                onClick={onClose}
                className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors"
              >
                Continue Browsing Catalog
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
