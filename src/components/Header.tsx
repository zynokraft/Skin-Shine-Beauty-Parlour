import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import {
  Phone,
  MessageCircle,
  Calendar,
  Star,
  MapPin,
  Clock,
  Menu,
  X,
  Sparkles,
  ShoppingBag,
} from 'lucide-react';
import { ServiceItem } from '../types';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
  selectedServices: ServiceItem[];
  onOpenLocation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
  onOpenQuiz,
  selectedServices,
  onOpenLocation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Notification / Info Bar */}
      <div className="bg-[#200B26] text-white py-2 px-4 text-xs font-medium border-b border-pink-950/60">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Google rating badge */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Skin%20Shine%20Beauty%20Parlor&query_place_id=ChIJtWNsQQATrjsR3TA-kf_AmB8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 transition-colors px-2.5 py-0.5 rounded-full border border-pink-400/30 text-amber-300"
            >
              <span className="flex text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
              </span>
              <span className="font-bold text-white">4.9 / 5.0</span>
              <span className="text-pink-200/80 hidden sm:inline">Google Maps Verified</span>
            </a>
            <span className="hidden md:inline-flex items-center gap-1 text-pink-200/80 text-[11px]">
              <MapPin className="w-3 h-3 text-[#D82289]" /> Parappana Agrahara, Bangalore
            </span>
          </div>

          {/* Right: Hours & Promo code */}
          <div className="flex items-center gap-4 text-pink-100/90 text-[11px]">
            <div className="hidden lg:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#D82289]" />
              <span>Open: 9:30 AM – 8:30 PM (All 7 Days)</span>
            </div>
            <div className="inline-flex items-center gap-1 bg-[#D82289] text-white px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-bold shadow-sm">
              <Sparkles className="w-3 h-3" />
              <span>Code: <strong>SHINEFIRST20</strong> (20% OFF)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white py-4'
        } border-b border-pink-100`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex-shrink-0 group">
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-[0.14em] text-[#200B26]">
            <a
              href="#services"
              className="hover:text-[#D82289] transition-colors py-1 relative group"
            >
              Services & Menu
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D82289] transition-all group-hover:w-full" />
            </a>
            <a
              href="#bridal"
              className="hover:text-[#D82289] transition-colors py-1 relative group"
            >
              Bridal Studio
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D82289] transition-all group-hover:w-full" />
            </a>
            <a
              href="#kids"
              className="hover:text-[#D82289] transition-colors py-1 relative group"
            >
              Kids Corner
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D82289] transition-all group-hover:w-full" />
            </a>
            <a
              href="#location"
              onClick={(e) => {
                e.preventDefault();
                onOpenLocation();
              }}
              className="hover:text-[#D82289] transition-colors py-1 relative group"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D82289] transition-all group-hover:w-full" />
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Quick WhatsApp */}
            <a
              href="https://wa.me/919986554321?text=Hi%20Skin%20Shine%20Beauty%20Parlor,%20I%20would%20like%20to%20inquire%20about%20your%20services%20and%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center p-2.5 rounded-xl bg-pink-50 text-[#25D366] hover:bg-emerald-50 transition-colors border border-pink-200"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Quick Call */}
            <a
              href="tel:+919986554321"
              className="hidden sm:inline-flex items-center justify-center p-2.5 rounded-xl bg-pink-50 text-[#D82289] hover:bg-pink-100 transition-colors border border-pink-200"
              title="Call Parlor"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Book Appointment CTA */}
            <button
              id="header-book-btn"
              onClick={onOpenBooking}
              className="relative inline-flex items-center gap-2 bg-[#D82289] hover:bg-[#BF1876] text-white px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md shadow-[#D82289]/20 transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>Book Appointment</span>
              {selectedServices.length > 0 && (
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-white text-[#D82289] font-bold text-[10px]">
                  {selectedServices.length}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-pink-50 text-[#200B26] border border-pink-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-pink-200 shadow-xl px-5 py-5 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2 text-xs uppercase tracking-wider text-[#200B26]">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl bg-pink-50/70 border border-pink-100 flex items-center justify-between font-bold"
            >
              <span>Services & Menu</span>
              <span className="text-[10px] bg-[#D82289] text-white px-2 py-0.5 rounded-full font-bold">All</span>
            </a>
            <a
              href="#bridal"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl bg-pink-50/70 border border-pink-100 font-bold"
            >
              Bridal & Event Makeovers
            </a>
            <a
              href="#kids"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl bg-pink-50/70 border border-pink-100 font-bold"
            >
              Kids Corner
            </a>
            <a
              href="#location"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLocation();
              }}
              className="px-3.5 py-2.5 rounded-xl bg-pink-50/70 border border-pink-100 font-bold"
            >
              Contact Us
            </a>
          </nav>

          <div className="pt-3 border-t border-pink-100 flex items-center justify-between gap-3">
            <a
              href="https://wa.me/919986554321"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
            <a
              href="tel:+919986554321"
              className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#200B26] text-white font-bold text-xs uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 text-[#D82289]" />
              <span>Call Salon</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
