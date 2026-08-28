import React from 'react';
import { Crown, Sparkles, Check, Calendar, Phone, Heart } from 'lucide-react';

interface BridalSectionProps {
  onBookBridal: () => void;
}

export const BridalSection: React.FC<BridalSectionProps> = ({ onBookBridal }) => {
  return (
    <section id="bridal" className="py-16 sm:py-20 bg-gradient-to-b from-[#200B26] via-[#330C3E] to-[#200B26] text-white relative overflow-hidden border-b border-pink-900/40">
      {/* Subtle Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D82289]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 border border-pink-400/30 text-pink-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Crown className="w-3.5 h-3.5 text-pink-300" />
            <span>Bridal & Makeover Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Your Dream Bridal Transformation
          </h2>
          <div className="w-16 h-1 bg-[#D82289] mx-auto my-3 rounded-full" />
          <p className="mt-2 text-sm text-pink-100/80">
            From pre-bridal skin purification to waterproof HD bridal glam and meticulous saree draping, we make your most treasured day breathtaking.
          </p>
        </div>

        {/* 3 Packages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Package 1: Pre-Bridal Glow */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-pink-400/20 hover:border-pink-300 transition-all flex flex-col justify-between space-y-6 shadow-xl">
            <div>
              <div className="text-[10px] font-bold text-pink-300 uppercase tracking-wider">
                1 - 2 Weeks Before
              </div>
              <h3 className="text-xl font-bold text-white mt-1">
                Pre-Bridal Radiance Ritual
              </h3>
              <div className="text-2xl font-extrabold text-white mt-2">
                ₹3,499 <span className="text-xs text-pink-200/50 font-normal line-through">₹4,999</span>
              </div>
              <ul className="mt-4 space-y-2.5 text-xs text-pink-100/90">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-pink-300" />
                  <span>O3+ Whitening & Bridal Facial</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-pink-300" />
                  <span>Full Body Rica Waxing & D-Tan</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-pink-300" />
                  <span>Rose Petal Luxury Spa Pedicure & Manicure</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-pink-300" />
                  <span>Deep Conditioning Moroccan Hair Spa</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onBookBridal}
              className="w-full py-3 rounded-2xl bg-white/10 hover:bg-[#D82289] text-white text-xs font-bold uppercase tracking-wider border border-pink-300/30 transition-all cursor-pointer shadow-sm"
            >
              Book Pre-Bridal
            </button>
          </div>

          {/* Package 2: Royal HD Bridal (Highlighted) */}
          <div className="bg-gradient-to-b from-[#4A1038] to-[#25081E] rounded-3xl p-6 border-2 border-pink-400 shadow-2xl shadow-[#D82289]/30 flex flex-col justify-between space-y-6 relative transform md:-translate-y-2">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#D82289] text-white text-[10px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
              Most Popular
            </div>

            <div>
              <div className="text-[10px] font-bold text-pink-300 uppercase tracking-wider">
                Wedding Day Glam
              </div>
              <h3 className="text-xl font-bold text-white mt-1">
                Royal HD Bridal Makeover
              </h3>
              <div className="text-2xl font-extrabold text-pink-300 mt-2">
                ₹5,999 <span className="text-xs text-pink-200/50 font-normal line-through">₹7,999</span>
              </div>
              <ul className="mt-4 space-y-2.5 text-xs text-white">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-pink-300" />
                  <span>14-Hour Waterproof HD Makeup</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-pink-300" />
                  <span>Custom Bridal Hair Updo / South Indian Braid</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-pink-300" />
                  <span>Precision Saree Draping & Veil Pinning</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-pink-300" />
                  <span>Premium False Lashes & Jewelry Setting</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-pink-300" />
                  <span>Complimentary Touch-up Vanity Kit</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onBookBridal}
              className="w-full py-3.5 rounded-2xl bg-[#D82289] hover:bg-[#BF1876] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#D82289]/40 border border-pink-400/30 transition-all cursor-pointer"
            >
              Book Royal Bridal Package
            </button>
          </div>

          {/* Package 3: Engagement & Reception Glam */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-pink-400/20 hover:border-pink-300 transition-all flex flex-col justify-between space-y-6 shadow-xl">
            <div>
              <div className="text-[10px] font-bold text-pink-300 uppercase tracking-wider">
                Occasion & Party
              </div>
              <h3 className="text-xl font-bold text-white mt-1">
                Engagement & Reception Glam
              </h3>
              <div className="text-2xl font-extrabold text-white mt-2">
                ₹2,899 <span className="text-xs text-pink-200/50 font-normal line-through">₹3,800</span>
              </div>
              <ul className="mt-4 space-y-2.5 text-xs text-pink-100/90">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-pink-300" />
                  <span>Soft Glam HD Finish with Contouring</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-pink-300" />
                  <span>Glam Curls, Hollywood Waves or Chic Bun</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-pink-300" />
                  <span>Lehenga / Gown / Saree Draping</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-pink-300" />
                  <span>Lashes & High-Shine Gloss Finish</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onBookBridal}
              className="w-full py-3 rounded-2xl bg-white/10 hover:bg-[#D82289] text-white text-xs font-bold uppercase tracking-wider border border-pink-300/30 transition-all cursor-pointer shadow-sm"
            >
              Book Reception Glam
            </button>
          </div>

        </div>

        {/* Bridal Consultation Banner */}
        <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-pink-400/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-[#D82289] text-white shadow-sm">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Need a Custom Bridal Package or Group Booking?</div>
              <div className="text-xs text-pink-200">We curate personalized packages for Bridesmaids, Mother of the Bride, and Sangeet groups.</div>
            </div>
          </div>

          <a
            href="https://wa.me/919986554321?text=Hi%20Skin%20Shine,%20I%20am%20looking%20for%20a%20bridal%20consultation%20and%20packages%20for%20my%20wedding."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs uppercase tracking-wider whitespace-nowrap shadow-md transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Chat for Bridal Consultation</span>
          </a>
        </div>

      </div>
    </section>
  );
};
