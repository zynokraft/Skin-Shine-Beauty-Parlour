import React from 'react';
import { Logo } from './Logo';
import {
  Star,
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Heart,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
  onOpenLocation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onOpenQuiz,
  onOpenLocation,
}) => {
  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Skin%20Shine%20Beauty%20Parlor&query_place_id=ChIJtWNsQQATrjsR3TA-kf_AmB8';

  return (
    <footer className="bg-[#17051C] text-white pt-16 pb-12 border-t border-pink-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-pink-900/40">
          
          {/* Col 1: Brand & Google Rating */}
          <div className="lg:col-span-5 space-y-4">
            <Logo theme="dark" size="md" />
            
            <p className="text-xs sm:text-sm text-pink-100/80 max-w-sm leading-relaxed">
              Skin Shine Ladies and Kids Beauty Parlor offers hygienic, premium hair styling, hydra facials, bridal glams, and tear-free children’s haircuts in Parappana Agrahara, Bangalore.
            </p>

            {/* Google Rating Badge */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-pink-500/30 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#D82289] text-white flex items-center justify-center font-bold text-sm shadow-md shadow-[#D82289]/30">
                4.9★
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1">
                  <span>Google Maps Verified Place</span>
                  <ExternalLink className="w-3.5 h-3.5 text-pink-300 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div className="text-[11px] text-pink-300">
                  Read live customer reviews & rate us
                </div>
              </div>
            </a>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-pink-300">
              Popular Services
            </h4>
            <ul className="space-y-2 text-xs text-pink-100/80">
              <li>
                <a href="#services" className="hover:text-pink-200 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-pink-400" />
                  <span>Hydra Glow Deep Cleanse Facial</span>
                </a>
              </li>
              <li>
                <a href="#bridal" className="hover:text-pink-200 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-pink-400" />
                  <span>Royal HD Bridal Makeovers</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-pink-200 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-pink-400" />
                  <span>Keratin Hair Smoothening</span>
                </a>
              </li>
              <li>
                <a href="#kids" className="hover:text-pink-200 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-pink-400" />
                  <span>Kids Gentle Haircut & Braiding</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-pink-200 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-pink-400" />
                  <span>Rica Waxing & Eyebrow Threading</span>
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenQuiz}
                  className="hover:text-white transition-colors flex items-center gap-1 text-pink-300 font-medium cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-pink-400" />
                  <span>Skin & Hair Analyzer Quiz</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Location & Timing Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-pink-300">
              Visit or Contact
            </h4>
            
            <div className="space-y-2.5 text-xs text-pink-100/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                <span>
                  Parappana Agrahara Main Road / Naganathapura, Near Electronic City, Bangalore 560100
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <span>Mon – Sun: 9:30 AM – 8:30 PM (All 7 Days)</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <a href="tel:+919986554321" className="hover:text-pink-200 font-semibold">
                  +91 99865 54321
                </a>
              </div>
            </div>

            <div className="pt-2 flex gap-2">
              <button
                onClick={onOpenBooking}
                className="px-4 py-2.5 rounded-xl bg-[#D82289] hover:bg-[#BF1876] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-md shadow-[#D82289]/20"
              >
                Book Appointment
              </button>
              <a
                href="https://wa.me/919986554321"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 shadow-md shadow-emerald-500/20"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-pink-200/60 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Skin Shine Ladies and Kids Beauty Parlor. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-pink-300 transition-colors">Services</a>
            <a href="#bridal" className="hover:text-pink-300 transition-colors">Bridal</a>
            <a href="#reviews" className="hover:text-pink-300 transition-colors">Reviews</a>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition-colors">Google Maps</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
