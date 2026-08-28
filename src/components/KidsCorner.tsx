import React from 'react';
import { Baby, Sparkles, Heart, ShieldCheck, Smile, Gift, Calendar } from 'lucide-react';

interface KidsCornerProps {
  onBookKids: () => void;
}

export const KidsCorner: React.FC<KidsCornerProps> = ({ onBookKids }) => {
  return (
    <section id="kids" className="py-16 sm:py-20 bg-pink-50/40 relative overflow-hidden border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-3xl shadow-xl border-4 border-white aspect-[4/3] sm:aspect-square bg-pink-100">
              <img
                src="https://images.unsplash.com/photo-1595454223600-91fbdd77e231?auto=format&fit=crop&w=800&q=80"
                alt="Kids gentle haircut at Skin Shine"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#200B26]/80 via-transparent to-black/10" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-md border border-pink-100">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-pink-100 text-[#D82289]">
                    <Baby className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#200B26]">Tear-Free Kids Experience</div>
                    <div className="text-[11px] text-gray-500">Patience-first stylists & safe sanitized scissors</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticker / Floating Badge */}
            <div className="absolute -top-4 -right-2 sm:-right-4 bg-[#D82289] text-white font-bold text-xs py-2 px-4 rounded-full shadow-lg flex items-center gap-1.5 uppercase tracking-wider">
              <Gift className="w-4 h-4 text-white" />
              <span>Free Treats & Stickers!</span>
            </div>
          </div>

          {/* Right Column: Information & Packages */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-50 text-[#D82289] text-xs font-bold uppercase tracking-wider border border-pink-200">
              <Baby className="w-3.5 h-3.5 text-[#D82289]" />
              <span>Dedicated Kids & Juniors Haven</span>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#200B26] tracking-tight leading-tight">
                Gentle Haircuts & Pampering for Little Stars
              </h2>
              <div className="w-16 h-1 bg-[#D82289] mt-3 rounded-full" />
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              At Skin Shine, children aren't an afterthought. We've crafted a warm, joyful environment where young boys and girls enjoy relaxed haircuts, cute party braids, non-toxic peelable nail polish, and hair detangling without tears.
            </p>

            {/* 4 Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-pink-100 shadow-sm space-y-1">
                <div className="text-xs font-bold text-[#200B26] flex items-center gap-1.5 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#D82289]" />
                  <span>100% Non-Toxic & Safe</span>
                </div>
                <p className="text-xs text-gray-600">
                  Sulphate-free, mild herbal shampoos and kid-safe water-based nail paints.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-pink-100 shadow-sm space-y-1">
                <div className="text-xs font-bold text-[#200B26] flex items-center gap-1.5 uppercase tracking-wider">
                  <Smile className="w-4 h-4 text-[#D82289]" />
                  <span>Friendly & Patient Stylists</span>
                </div>
                <p className="text-xs text-gray-600">
                  Trained to engage with shy or energetic toddlers and make haircuts enjoyable.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-pink-100 shadow-sm space-y-1">
                <div className="text-xs font-bold text-[#200B26] flex items-center gap-1.5 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-[#D82289]" />
                  <span>Princess Braids & Fun Styles</span>
                </div>
                <p className="text-xs text-gray-600">
                  Colorful ribbon twists, French braids, and fun spikes for school events or parties.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-pink-100 shadow-sm space-y-1">
                <div className="text-xs font-bold text-[#200B26] flex items-center gap-1.5 uppercase tracking-wider">
                  <Heart className="w-4 h-4 text-[#D82289]" />
                  <span>Mother & Daughter Specials</span>
                </div>
                <p className="text-xs text-gray-600">
                  Side-by-side pamper sessions with matching mani-pedis and haircare.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookKids}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#D82289] hover:bg-[#BF1876] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#D82289]/30 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Kids / Duo Appointment</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
