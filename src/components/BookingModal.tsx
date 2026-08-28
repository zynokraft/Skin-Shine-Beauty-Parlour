import React, { useState } from 'react';
import { ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/servicesData';
import confetti from 'canvas-confetti';
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  Sparkles,
  CheckCircle2,
  Trash2,
  Plus,
  ArrowRight,
  MessageCircle,
  Tag,
  ShieldCheck,
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServices: ServiceItem[];
  onToggleService: (service: ServiceItem) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedServices,
  onToggleService,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [bookingDate, setBookingDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('11:00 AM');
  const [clientType, setClientType] = useState<'ladies' | 'kids' | 'mom_daughter' | 'bridal'>('ladies');
  const [stylistPreference, setStylistPreference] = useState<'any' | 'senior' | 'hair_specialist' | 'kids_friendly'>('any');
  const [notes, setNotes] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [couponSuccess, setCouponSuccess] = useState(false);
  const [couponError, setCouponError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const timeSlots = [
    '09:30 AM',
    '10:30 AM',
    '11:30 AM',
    '12:30 PM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM',
    '06:30 PM',
    '07:30 PM',
  ];

  const subtotal = selectedServices.reduce((sum, s) => sum + s.price, 0);
  const discountAmount = appliedDiscount > 0 ? (subtotal * appliedDiscount) / 100 : 0;
  const finalTotal = Math.max(0, subtotal - discountAmount);

  const handleApplyCoupon = () => {
    setCouponError('');
    const code = couponCode.trim().toUpperCase();
    if (code === 'SHINEFIRST20' || code === 'SHINE20') {
      setAppliedDiscount(20);
      setCouponSuccess(true);
    } else if (code === 'BRIDAL15') {
      setAppliedDiscount(15);
      setCouponSuccess(true);
    } else if (code === 'KIDS10') {
      setAppliedDiscount(10);
      setCouponSuccess(true);
    } else {
      setCouponError('Invalid promo code. Try SHINEFIRST20 for 20% off!');
      setAppliedDiscount(0);
      setCouponSuccess(false);
    }
  };

  const generateWhatsAppUrl = () => {
    const serviceList = selectedServices.map((s) => `• ${s.name} (₹${s.price})`).join('\n');
    const msg = `*Appointment Booking Request - Skin Shine Beauty Parlor*
━━━━━━━━━━━━━━━━━━━━
👤 *Customer Name:* ${customerName}
📞 *Phone:* ${customerPhone}
📅 *Date:* ${bookingDate}
⏰ *Time Slot:* ${timeSlot}
🏷️ *Client Category:* ${clientType.toUpperCase()}
✨ *Stylist Preference:* ${stylistPreference}

💅 *Services Requested:*
${serviceList || '• General Consultation'}

💰 *Estimated Bill:* ₹${finalTotal.toLocaleString('en-IN')} ${appliedDiscount > 0 ? `(Includes ${appliedDiscount}% Promo Discount)` : ''}
📝 *Special Notes:* ${notes || 'None'}
━━━━━━━━━━━━━━━━━━━━
Please confirm my appointment slot. Thank you!`;

    return `https://wa.me/918495881919?text=${encodeURIComponent(msg)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D82289', '#200B26', '#FDF2F4', '#10B981'],
    });

    const waUrl = generateWhatsAppUrl();
    try {
      const link = document.createElement('a');
      link.href = waUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error('Auto whatsapp redirect error', err);
    }

    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-pink-200 flex flex-col">
        
        {/* Header */}
        <div className="sticky top-0 bg-[#200B26] text-white p-5 flex items-center justify-between z-10 border-b border-pink-900/40">
          <div>
            <div className="text-[10px] text-pink-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-pink-300" />
              Skin Shine Ladies & Kids Parlor
            </div>
            <h2 className="text-xl font-extrabold text-white">
              {isSubmitted ? 'Appointment Confirmed! 🎉' : 'Book Your Beauty Slot'}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-[#D82289] text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex-1">
          {isSubmitted ? (
            /* Confirmation Screen */
            <div className="text-center py-6 space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-pink-50 text-[#D82289] border border-pink-200 flex items-center justify-center animate-bounce shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-[#200B26]">
                  Thank You, {customerName}!
                </h3>
                <p className="text-sm text-gray-600 mt-1 max-w-md mx-auto">
                  Your appointment slot request for <strong>{bookingDate}</strong> at <strong>{timeSlot}</strong> has been registered.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-pink-50/70 p-5 rounded-2xl border border-pink-200 text-left space-y-3 max-w-lg mx-auto">
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Date & Slot:</span>
                  <span className="font-bold text-[#200B26]">{bookingDate} • {timeSlot}</span>
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Client Type:</span>
                  <span className="font-bold text-[#200B26] capitalize">{clientType.replace('_', ' ')}</span>
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Contact Number:</span>
                  <span className="font-bold text-[#200B26]">{customerPhone}</span>
                </div>
                <div className="border-t border-pink-200 pt-2 flex justify-between text-sm font-bold text-[#200B26]">
                  <span>Total Payable at Parlour:</span>
                  <span className="text-[#D82289] font-extrabold text-base">₹{finalTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Instant WhatsApp Confirmation */}
              <div className="space-y-3 max-w-md mx-auto">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-emerald-500/20 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Confirmation to Parlour on WhatsApp</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full py-2.5 rounded-2xl border border-pink-200 text-[#200B26] text-xs font-bold uppercase tracking-wider hover:bg-pink-50 transition-colors cursor-pointer"
                >
                  Close & Continue Browsing
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form Steps */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1: Selected Services Review */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-[#200B26] uppercase tracking-wider flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#D82289] text-white text-xs font-bold flex items-center justify-center">1</span>
                    Selected Services ({selectedServices.length})
                  </h3>
                  {selectedServices.length === 0 && (
                    <span className="text-xs text-[#D82289] font-semibold">Please select at least 1 service</span>
                  )}
                </div>

                {selectedServices.length === 0 ? (
                  <div className="p-5 rounded-2xl bg-pink-50/50 border border-dashed border-pink-300 text-center">
                    <p className="text-xs text-gray-600">No service selected yet.</p>
                    <div className="mt-3 flex flex-wrap gap-2 justify-center">
                      {SERVICES_DATA.slice(0, 3).map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => onToggleService(s)}
                          className="text-xs bg-white text-[#200B26] border border-pink-200 rounded-xl px-3 py-1.5 font-bold hover:bg-pink-50 transition-colors cursor-pointer"
                        >
                          + {s.name} (₹{s.price})
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    {selectedServices.map((service) => (
                      <div
                        key={service.id}
                        className="flex items-center justify-between p-3 rounded-2xl bg-pink-50/50 border border-pink-200/60"
                      >
                        <div className="flex items-center gap-2.5">
                          <img
                            src={service.image}
                            alt={service.name}
                            className="w-10 h-10 rounded-xl object-cover border border-pink-200"
                          />
                          <div>
                            <div className="text-xs font-bold text-[#200B26]">{service.name}</div>
                            <div className="text-[11px] text-gray-500">{service.duration} • {service.target}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="text-sm font-extrabold text-[#D82289]">
                            ₹{service.price.toLocaleString('en-IN')}
                          </span>
                          <button
                            type="button"
                            onClick={() => onToggleService(service)}
                            className="text-gray-400 hover:text-pink-600 p-1 transition-colors cursor-pointer"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Step 2: Date, Time & Client Preference */}
              <div className="space-y-4 pt-2 border-t border-pink-200">
                <h3 className="text-xs font-bold text-[#200B26] uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#D82289] text-white text-xs font-bold flex items-center justify-center">2</span>
                  Schedule & Preferences
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Date Picker */}
                  <div>
                    <label className="block text-xs font-bold text-[#200B26] mb-1.5">
                      Select Date *
                    </label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-pink-200 bg-white text-sm text-[#200B26] focus:ring-2 focus:ring-[#D82289] outline-none"
                    />
                  </div>

                  {/* Client Category */}
                  <div>
                    <label className="block text-xs font-bold text-[#200B26] mb-1.5">
                      Client Category *
                    </label>
                    <select
                      value={clientType}
                      onChange={(e) => setClientType(e.target.value as any)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-pink-200 bg-white text-sm text-[#200B26] focus:ring-2 focus:ring-[#D82289] outline-none"
                    >
                      <option value="ladies">Ladies Service</option>
                      <option value="kids">Kids Beauty / Hair Care</option>
                      <option value="mom_daughter">Mother & Daughter Duo</option>
                      <option value="bridal">Bridal / Wedding Makeover</option>
                    </select>
                  </div>
                </div>

                {/* Time Slots Selector */}
                <div>
                  <label className="block text-xs font-bold text-[#200B26] mb-1.5">
                    Select Time Slot *
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setTimeSlot(slot)}
                        className={`py-2 px-1 rounded-xl text-center text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                          timeSlot === slot
                            ? 'bg-[#D82289] text-white border-[#D82289] shadow-sm'
                            : 'bg-white text-gray-600 border-pink-200 hover:border-[#D82289]'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Stylist Preference */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#200B26] mb-1.5">
                      Stylist Preference
                    </label>
                    <select
                      value={stylistPreference}
                      onChange={(e) => setStylistPreference(e.target.value as any)}
                      className="w-full px-3.5 py-2 rounded-xl border border-pink-200 bg-white text-xs text-[#200B26] outline-none"
                    >
                      <option value="any">Any Available Expert Stylist</option>
                      <option value="senior">Senior Aesthetician</option>
                      <option value="hair_specialist">Hair Color & Smoothening Expert</option>
                      <option value="kids_friendly">Gentle Kids Stylist</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#200B26] mb-1.5">
                      Special Requests / Notes
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. sensitive skin, saree style, etc."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-pink-200 bg-white text-xs text-[#200B26] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Contact & Voucher */}
              <div className="space-y-4 pt-2 border-t border-pink-200">
                <h3 className="text-xs font-bold text-[#200B26] uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#D82289] text-white text-xs font-bold flex items-center justify-center">3</span>
                  Your Details & Promo Voucher
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#200B26] mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-pink-200 bg-white text-sm text-[#200B26] focus:ring-2 focus:ring-[#D82289] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#200B26] mb-1">
                      WhatsApp / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-pink-200 bg-white text-sm text-[#200B26] focus:ring-2 focus:ring-[#D82289] outline-none"
                    />
                  </div>
                </div>

                {/* Promo Voucher Code Box */}
                <div className="p-3.5 rounded-2xl bg-pink-50/70 border border-pink-200">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D82289]" />
                      <input
                        type="text"
                        placeholder="Enter Promo Code (Try SHINEFIRST20)"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-pink-200 text-xs uppercase font-bold text-[#200B26] outline-none focus:ring-2 focus:ring-[#D82289]"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={handleApplyCoupon}
                      className="px-4 py-2 rounded-xl bg-[#D82289] hover:bg-[#BF1876] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
                    >
                      Apply
                    </button>
                  </div>

                  {couponSuccess && (
                    <div className="text-xs text-emerald-800 font-bold mt-1.5 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                      Promo code applied! You get {appliedDiscount}% OFF.
                    </div>
                  )}

                  {couponError && (
                    <div className="text-xs text-rose-700 font-medium mt-1.5">
                      {couponError}
                    </div>
                  )}
                </div>
              </div>

              {/* Price Breakdown Footer */}
              <div className="pt-3 border-t border-pink-200 space-y-2">
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Services Subtotal:</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-xs text-emerald-800 font-bold">
                    <span>Discount Voucher ({appliedDiscount}%):</span>
                    <span>- ₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-extrabold text-[#200B26] pt-1 border-t border-dashed border-pink-200">
                  <span>Estimated Total (Pay at Parlor):</span>
                  <span className="text-[#D82289]">₹{finalTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={selectedServices.length === 0}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#D82289] hover:bg-[#BF1876] text-white disabled:opacity-50 font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#D82289]/30 transition-all cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-white" />
                <span>Confirm Appointment</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
