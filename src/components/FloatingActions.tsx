import React from 'react';
import { ServiceItem } from '../types';
import { MessageCircle, Phone, Calendar, ShoppingBag } from 'lucide-react';

interface FloatingActionsProps {
  onOpenBooking: () => void;
  selectedServices: ServiceItem[];
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenBooking,
  selectedServices,
}) => {
  const count = selectedServices.length;
  const totalPrice = selectedServices.reduce((sum, s) => sum + s.price, 0);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Floating Buttons: WhatsApp & Call */}
      <div className="flex items-center gap-2.5 pointer-events-auto">
        <a
          href="https://wa.me/919986554321?text=Hi%20Skin%20Shine%20Beauty%20Parlor,%20I%20would%20like%20to%20book%20an%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform shadow-emerald-500/30"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>

        <a
          href="tel:+919986554321"
          className="w-12 h-12 rounded-full bg-[#D82289] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform shadow-[#D82289]/40"
          title="Call Skin Shine"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

      {/* Floating Selected Services / Basket Pill if items are selected */}
      {count > 0 && (
        <button
          onClick={onOpenBooking}
          className="pointer-events-auto flex items-center gap-3 py-2.5 px-4 rounded-2xl bg-[#200B26] text-white shadow-2xl border border-pink-500/40 hover:bg-[#2A0E32] transition-all transform hover:scale-102 cursor-pointer animate-in slide-in-from-bottom-4 duration-300"
        >
          <div className="w-7 h-7 rounded-lg bg-[#D82289] text-white text-xs font-bold flex items-center justify-center shadow-sm">
            {count}
          </div>
          <div className="text-left text-xs">
            <div className="font-bold text-white leading-tight">
              {count} {count === 1 ? 'Service' : 'Services'} Selected
            </div>
            <div className="text-pink-300 text-[11px]">
              ₹{totalPrice.toLocaleString('en-IN')} • Tap to Book Slot
            </div>
          </div>
          <div className="p-1 rounded-lg bg-white/10">
            <Calendar className="w-4 h-4 text-pink-300" />
          </div>
        </button>
      )}

    </div>
  );
};
