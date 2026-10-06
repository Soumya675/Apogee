import React, { useState } from 'react';
import { X, Trash2, ShoppingCart, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  type: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearCart,
}) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, curr) => acc + curr.price, 0);
  const total = Math.max(0, subtotal - discount);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (coupon.toUpperCase() === 'GIFT2026' || coupon.toUpperCase() === 'APOGEE') {
      setDiscount(Math.round(subtotal * 0.2)); // 20% discount
    } else {
      alert('Invalid coupon. Try "GIFT2026" or "APOGEE" for 20% institutional discount.');
    }
  };

  const handleCheckout = () => {
    setIsSuccess(true);
    setTimeout(() => {
      onClearCart();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-slate-200 shadow-2xl p-6 flex flex-col justify-between text-left">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-blue-700" />
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">Your Learning Cart</h3>
                <span className="font-mono text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-bold">
                  {items.length} {items.length === 1 ? 'Item' : 'Items'}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            {!isSuccess ? (
              <div className="mt-6 space-y-4 max-h-[55vh] overflow-y-auto pr-1">
                {items.length === 0 ? (
                  <div className="py-16 text-center text-slate-400 space-y-3">
                    <ShoppingCart className="w-12 h-12 text-slate-300 mx-auto" />
                    <p className="text-sm font-semibold text-slate-700">Your cart is currently empty</p>
                    <p className="text-xs text-slate-500 max-w-xs mx-auto">
                      Explore our test series or career programs to add specialized prep modules.
                    </p>
                  </div>
                ) : (
                  items.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between gap-3 group"
                    >
                      <div>
                        <span className="text-[10px] font-mono text-blue-700 uppercase font-bold">
                          {item.type}
                        </span>
                        <h4 className="text-xs font-bold text-slate-900 line-clamp-1">{item.name}</h4>
                        <span className="text-xs font-mono font-bold text-slate-700">
                          ₹{item.price}
                        </span>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-2 text-slate-400 hover:text-rose-600 hover:bg-white rounded-lg transition-colors cursor-pointer"
                        title="Remove from cart"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            ) : (
              <div className="py-16 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Enrollment Confirmed!</h4>
                <p className="text-xs text-slate-600 max-w-xs mx-auto">
                  Your batch activation credentials and test portal access have been emailed to your registered student ID.
                </p>
              </div>
            )}
          </div>

          {/* Footer & Checkout */}
          {items.length > 0 && !isSuccess && (
            <div className="pt-6 border-t border-slate-200 space-y-4">
              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Coupon Code (e.g. GIFT2026)"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder-slate-400 uppercase focus:outline-none focus:border-blue-600 focus:bg-white"
                />
                <button
                  type="submit"
                  className="px-3 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </form>

              {/* Price Calculation */}
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono text-slate-900 font-semibold">₹{subtotal}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Institutional Discount</span>
                    <span className="font-mono">-₹{discount}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-bold text-slate-900 pt-2 border-t border-slate-100">
                  <span>Total Due</span>
                  <span className="font-mono text-blue-700">₹{total}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to Instant Activation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero-Fee Student Placement Guarantee</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
