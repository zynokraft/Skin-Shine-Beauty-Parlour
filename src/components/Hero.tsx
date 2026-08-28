import React from 'react';
import {
  Star,
  Sparkles,
  Calendar,
  ShieldCheck,
  Heart,
  Baby,
  ExternalLink,
  ChevronRight,
  Award,
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
  onViewServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onOpenQuiz,
  onViewServices,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-50/70 via-[#FFF9FB] to-white pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-pink-100">
      {/* Subtle Background Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D82289]/5 rounded-full blur-3xl opacity-60 pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-purple-900/5 rounded-full blur-3xl opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Badge, Value Props, Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Brand Pill & Live Google Rating Pill */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100/80 border border-pink-200 text-[#D82289] text-xs font-bold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#D82289]" />
                Ladies & Kids Beauty Parlor
              </span>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Skin%20Shine%20Beauty%20Parlor&query_place_id=ChIJtWNsQQATrjsR3TA-kf_AmB8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#200B26] border border-pink-200 text-xs shadow-sm hover:border-[#D82289] transition-all group"
              >
                <span className="flex text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                </span>
                <span className="font-bold">4.9</span>
                <span className="text-gray-500">Google Rating</span>
                <ExternalLink className="w-3 h-3 text-[#D82289]" />
              </a>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#200B26] tracking-tight leading-[1.2]">
                Enhance Your <span className="text-[#66101F]">Natural Shine</span> & Pure Glow
              </h1>
              <div className="w-20 h-1.5 bg-gradient-to-r from-[#D82289] to-pink-300 rounded-full mt-3 mx-auto lg:mx-0" />
            </div>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Step into Bangalore’s favorite neighborhood beauty parlor for premium hydra facials, bridal glams, hair care, and gentle, happy kids styling.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                id="hero-book-now-btn"
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-[#D82289] hover:bg-[#BF1876] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#D82289]/25 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Appointment</span>
              </button>

              <button
                id="hero-quiz-btn"
                onClick={onOpenQuiz}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-pink-50 text-[#200B26] font-bold text-sm border border-pink-200 transition-all shadow-sm cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#D82289]" />
                <span>Skin & Hair Analysis</span>
                <ChevronRight className="w-4 h-4 text-[#D82289]" />
              </button>
            </div>

            {/* Highlights Pillars */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 text-left p-3 rounded-2xl bg-white border border-pink-100 shadow-sm">
                <div className="p-2 rounded-xl bg-pink-50 text-[#D82289]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#200B26]">100% Hygienic</div>
                  <div className="text-[10px] text-gray-500">Sanitized Tools</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-left p-3 rounded-2xl bg-white border border-pink-100 shadow-sm">
                <div className="p-2 rounded-xl bg-pink-50 text-[#D82289]">
                  <Baby className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#200B26]">Kids Zone</div>
                  <div className="text-[10px] text-gray-500">Tear-Free & Gentle</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-left p-3 rounded-2xl bg-white border border-pink-100 shadow-sm">
                <div className="p-2 rounded-xl bg-pink-50 text-[#D82289]">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#200B26]">Top Stylists</div>
                  <div className="text-[10px] text-gray-500">8+ Yrs Experience</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-left p-3 rounded-2xl bg-white border border-pink-100 shadow-sm">
                <div className="p-2 rounded-xl bg-pink-50 text-[#D82289]">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#200B26]">Pure Care</div>
                  <div className="text-[10px] text-gray-500">O3+, L'Oréal, Rica</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Composite with Salon Treatment Photos */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Main Visual Card Container */}
            <div className="relative w-full max-w-md mx-auto">
              
              {/* Central Salon Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white aspect-[4/5] bg-pink-50">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
                  alt="Skin Shine Beauty Parlor Treatment"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#200B26]/80 via-transparent to-black/10" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-pink-100 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold text-[#D82289] uppercase tracking-wider">
                      Featured Ritual
                    </div>
                    <div className="text-sm font-bold text-[#200B26]">
                      Hydra Glow & Hair Spa
                    </div>
                    <div className="text-xs text-gray-600 font-medium mt-0.5">
                      Starting at ₹899 • Instant Radiance
                    </div>
                  </div>
                  <button
                    onClick={onViewServices}
                    className="px-3.5 py-1.5 bg-[#D82289] hover:bg-[#BF1876] text-white text-xs font-bold rounded-xl shadow-sm transition-colors cursor-pointer"
                  >
                    View Menu
                  </button>
                </div>
              </div>

              {/* Bottom-Left Live Google Rating Floater */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Skin%20Shine%20Beauty%20Parlor&query_place_id=ChIJtWNsQQATrjsR3TA-kf_AmB8"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-5 -left-3 sm:-left-6 z-20 bg-white text-[#200B26] p-3.5 rounded-2xl shadow-xl border border-pink-100 flex items-center gap-3 hover:bg-pink-50/70 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-white flex items-center justify-center font-bold shadow-md">
                  <Star className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-extrabold text-base text-[#200B26]">4.9 / 5.0</span>
                    <span className="text-xs text-amber-500">★★★★★</span>
                  </div>
                  <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">
                    Verified Google Reviews
                  </div>
                </div>
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
