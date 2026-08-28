import React from 'react';
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Navigation,
  Car,
  ShieldCheck,
  Star,
  ExternalLink,
} from 'lucide-react';

export const LocationSection: React.FC = () => {
  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Skin%20Shine%20Beauty%20Parlor&query_place_id=ChIJtWNsQQATrjsR3TA-kf_AmB8';

  return (
    <section id="location" className="py-16 sm:py-20 bg-pink-50/30 relative border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-50 text-[#D82289] text-xs font-bold uppercase tracking-wider mb-3 border border-pink-200">
            <MapPin className="w-3.5 h-3.5 text-[#D82289]" />
            <span>Visit Skin Shine Parlor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#200B26] tracking-tight">
            Location, Hours & Directions
          </h2>
          <div className="w-16 h-1 bg-[#D82289] mx-auto my-3 rounded-full" />
          <p className="mt-2 text-sm text-gray-600">
            Conveniently situated on Parappana Agrahara Main Road in Bangalore, with convenient two-wheeler & four-wheeler parking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Details Cards */}
          <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
            
            {/* Address Card */}
            <div className="bg-white p-6 rounded-3xl border border-pink-100 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-3.5 rounded-2xl bg-pink-50 text-[#D82289] border border-pink-100 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#D82289]">
                    Address & Landmarks
                  </div>
                  <h3 className="text-base font-bold text-[#200B26] mt-0.5">
                    Skin Shine Ladies & Kids Beauty Parlor
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Parappana Agrahara Main Road / Naganathapura, Near Electronic City, Bangalore, Karnataka - 560100
                  </p>
                  <div className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                    <Car className="w-3.5 h-3.5 text-[#D82289]" />
                    <span>Free customer parking right outside salon</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-pink-100 flex gap-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#D82289] hover:bg-[#BF1876] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-[#D82289]/20"
                >
                  <Navigation className="w-3.5 h-3.5 text-white" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-pink-50 border border-pink-200 text-[#200B26] hover:bg-pink-100 transition-colors"
                  title="Open on Google Maps"
                >
                  <ExternalLink className="w-4 h-4 text-[#D82289]" />
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-white p-6 rounded-3xl border border-pink-100 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3.5 rounded-2xl bg-pink-50 text-[#D82289] border border-pink-100 flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#D82289]">
                    Salon Timings
                  </div>
                  <h3 className="text-base font-bold text-[#200B26]">
                    Open All 7 Days a Week
                  </h3>
                </div>
              </div>

              <div className="space-y-1.5 pt-2 text-xs">
                <div className="flex justify-between py-1 border-b border-pink-100 text-[#200B26]">
                  <span className="font-semibold">Monday – Saturday:</span>
                  <span className="font-bold text-[#D82289]">9:30 AM – 8:30 PM</span>
                </div>
                <div className="flex justify-between py-1 border-b border-pink-100 text-[#200B26]">
                  <span className="font-semibold">Sunday (Special Timings):</span>
                  <span className="font-bold text-[#D82289]">9:30 AM – 8:30 PM</span>
                </div>
              </div>

              <div className="text-[11px] text-[#200B26] font-medium bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Currently Open • Walk-ins & Appointments Welcome</span>
              </div>
            </div>

            {/* Direct Contact CTAs */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:+919986554321"
                className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-white border border-pink-200 text-[#200B26] font-bold text-xs uppercase tracking-wider hover:bg-pink-50 transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#D82289]" />
                <span>Call Us</span>
              </a>

              <a
                href="https://wa.me/919986554321"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#20BD5A] transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>

          {/* Right Column: Embedded Google Map Visual Frame */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-pink-200 overflow-hidden shadow-sm flex flex-col">
            <div className="p-4 bg-[#200B26] text-white flex items-center justify-between border-b border-pink-900/40">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#D82289] animate-ping" />
                <span className="text-xs font-bold tracking-wide">Live Map View • Parappana Agrahara, Bangalore</span>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-pink-200 hover:text-white flex items-center gap-1 underline font-medium"
              >
                <span>View Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Map Frame */}
            <div className="relative w-full h-[380px] sm:h-[420px] bg-pink-50">
              <iframe
                title="Skin Shine Beauty Parlor Map Location"
                src="https://maps.google.com/maps?q=Skin+Shine+Beauty+Parlor+Parappana+Agrahara+Bangalore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />

              {/* Floating Verified Pin Card Overlay */}
              <div className="absolute top-4 left-4 p-3.5 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-pink-200 max-w-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#200B26] text-pink-200 flex items-center justify-center font-bold text-xs border border-pink-800">
                    4.9★
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#200B26]">Skin Shine Beauty Parlor</div>
                    <div className="text-[10px] text-gray-500">Parappana Agrahara Main Rd</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
