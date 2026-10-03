import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { Product, CartItem } from '../types/product';

interface ToastState {
  id: string;
  message: string;
  type: 'success' | 'info' | 'error';
  product?: Product;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedColor?: string) => void;
  removeFromCart: (productId: string, selectedColor?: string) => void;
  updateQuantity: (productId: string, quantity: number, selectedColor?: string) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  shipping: number;
  tax: number;
  promoDiscount: number;
  appliedCoupon: string | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  grandTotal: number;
  toasts: ToastState[];
  dismissToast: (id: string) => void;
  triggerToast: (message: string, type?: 'success' | 'info' | 'error', product?: Product) => void;
}

const CART_STORAGE_KEY = 'shopease_cart_v1';
const FREE_SHIPPING_THRESHOLD = 100;
const STANDARD_SHIPPING = 9.99;
const TAX_RATE = 0.07;

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize cart from LocalStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to read cart from LocalStorage', e);
    }
    return [];
  });

  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [toasts, setToasts] = useState<ToastState[]>([]);

  // Sync to LocalStorage whenever cart changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to LocalStorage', e);
    }
  }, [cart]);

  const triggerToast = (message: string, type: 'success' | 'info' | 'error' = 'success', product?: Product) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type, product }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3800);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const addToCart = (product: Product, quantity = 1, selectedColor?: string) => {
    const color = selectedColor || (product.colors && product.colors[0]) || '';
    
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === product.id && (item.selectedColor || '') === color
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        const newQty = updated[existingIndex].quantity + quantity;
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: Math.min(newQty, product.stockCount || 99)
        };
        return updated;
      } else {
        return [
          ...prevCart,
          {
            product,
            quantity: Math.min(quantity, product.stockCount || 99),
            selectedColor: color
          }
        ];
      }
    });

    triggerToast(`Added ${quantity}x "${product.name}" to cart!`, 'success', product);
  };

  const removeFromCart = (productId: string, selectedColor?: string) => {
    setCart((prevCart) => {
      const itemToRemove = prevCart.find(
        (item) => item.product.id === productId && (!selectedColor || item.selectedColor === selectedColor)
      );
      if (itemToRemove) {
        triggerToast(`Removed "${itemToRemove.product.name}" from cart`, 'info');
      }
      return prevCart.filter(
        (item) => !(item.product.id === productId && (!selectedColor || item.selectedColor === selectedColor))
      );
    });
  };

  const updateQuantity = (productId: string, quantity: number, selectedColor?: string) => {
    if (quantity <= 0) {
      removeFromCart(productId, selectedColor);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.product.id === productId && (!selectedColor || item.selectedColor === selectedColor)) {
          const clampedQty = Math.min(quantity, item.product.stockCount || 99);
          return { ...item, quantity: clampedQty };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
    setDiscountPercent(0);
    triggerToast('Shopping cart cleared', 'info');
  };

  const applyCoupon = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'SHOPEASE15') {
      setAppliedCoupon('SHOPEASE15');
      setDiscountPercent(0.15);
      triggerToast('Coupon applied: 15% discount!', 'success');
      return { success: true, message: '15% discount applied successfully!' };
    } else if (cleanCode === 'WELCOME10') {
      setAppliedCoupon('WELCOME10');
      setDiscountPercent(0.10);
      triggerToast('Coupon applied: 10% welcome discount!', 'success');
      return { success: true, message: '10% welcome discount applied!' };
    } else {
      triggerToast('Invalid coupon code. Try SHOPEASE15 or WELCOME10', 'error');
      return { success: false, message: 'Invalid promo code. Please verify and try again.' };
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setDiscountPercent(0);
    triggerToast('Coupon removed', 'info');
  };

  // Calculations
  const totalItems = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }, [cart]);

  const subtotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }, [cart]);

  const promoDiscount = useMemo(() => {
    return subtotal * discountPercent;
  }, [subtotal, discountPercent]);

  const shipping = useMemo(() => {
    if (cart.length === 0) return 0;
    return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING;
  }, [cart.length, subtotal]);

  const tax = useMemo(() => {
    return (subtotal - promoDiscount) * TAX_RATE;
  }, [subtotal, promoDiscount]);

  const grandTotal = useMemo(() => {
    if (cart.length === 0) return 0;
    return Math.max(0, subtotal - promoDiscount + shipping + tax);
  }, [cart.length, subtotal, promoDiscount, shipping, tax]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        shipping,
        tax,
        promoDiscount,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        grandTotal,
        toasts,
        dismissToast,
        triggerToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
