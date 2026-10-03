import React from 'react';
import { useCart } from '../context/CartContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ToastContainer: React.FC = () => {
  const { toasts, dismissToast } = useCart();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      {toasts.map((toast) => {
        const isSuccess = toast.type === 'success';
        const isError = toast.type === 'error';

        return (
          <div
            key={toast.id}
            className="pointer-events-auto flex items-start gap-3 p-3.5 bg-slate-900 text-white rounded-xl shadow-xl border border-slate-800 transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
          >
            {isSuccess && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />}
            {isError && <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />}
            {!isSuccess && !isError && <Info className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />}

            <div className="flex-1 text-xs">
              <p className="font-medium text-slate-100">{toast.message}</p>
              {toast.product && (
                <div className="mt-1.5 flex items-center gap-2">
                  <Link
                    to="/cart"
                    className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 underline"
                  >
                    View Cart
                  </Link>
                </div>
              )}
            </div>

            <button
              onClick={() => dismissToast(toast.id)}
              className="text-slate-400 hover:text-white transition-colors shrink-0 p-1"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
