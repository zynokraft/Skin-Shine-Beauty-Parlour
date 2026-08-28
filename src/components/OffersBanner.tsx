import React from 'react';
import { Tag, Sparkles, Copy, Check, Gift } from 'lucide-react';

export const OffersBanner: React.FC<{ onBookWithOffer: () => void }> = ({ onBookWithOffer }) => {
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const offers = [
    {
      code: 'SHINEFIRST20',
      title: 'First-Time Guest Privilege',
      discount: 'Flat 20% OFF',
      description: 'Applicable on any facial, hair spa, or wellness grooming service on your first visit.',
      badge: 'Welcome Privilege',
    },
    {
      code: 'BRIDAL15',
      title: 'Pre-Bridal & Wedding Glam',
      discount: '15% OFF + Free Draping',
      description: 'Advance booking privilege for bespoke bridal or bridal party transformations.',
      badge: 'Bridal Package',
    },
    {
      code: 'KIDS10',
      title: 'Mother & Kids Pamper Duo',
      discount: '10% OFF Duo Combo',
      description: 'Tear-free haircuts and gentle junior styling valid all weekdays.',
      badge: 'Family Special',
    },
  ];

  return (
    <section id="offers" className="py-14 bg-gradient-to-r from-[#200B26] via-[#330C3E] to-[#200B26] text-white relative overflow-hidden border-y border-pink-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-pink-300 text-xs font-bold uppercase tracking-wider mb-2 border border-pink-400/30">
              <Gift className="w-3.5 h-3.5 text-pink-300" />
              <span>Exclusive Salon Vouchers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Special Privileges & Savings
            </h2>
          </div>

          <button
            onClick={onBookWithOffer}
            className="px-6 py-3 rounded-2xl bg-[#D82289] hover:bg-[#BF1876] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#D82289]/40 border border-pink-400/30 transition-all cursor-pointer whitespace-nowrap"
          >
            Claim Privilege & Book Slot
          </button>
        </div>

        {/* 3 Voucher Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.code}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-pink-400/20 hover:border-pink-300 transition-all flex flex-col justify-between space-y-4 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-pink-200 bg-white/10 px-2.5 py-1 rounded-full border border-pink-400/30">
                    {offer.badge}
                  </span>
                  <span className="text-xs font-extrabold text-pink-300 uppercase tracking-wider">
                    {offer.discount}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mt-3">
                  {offer.title}
                </h3>
                <p className="text-xs text-pink-100/70 mt-1 leading-relaxed">
                  {offer.description}
                </p>
              </div>

              {/* Coupon Box */}
              <div className="pt-4 border-t border-pink-500/20 flex items-center justify-between gap-2">
                <div className="bg-black/30 px-3 py-1.5 rounded-xl border border-dashed border-pink-400/50 font-mono font-bold text-xs text-pink-200">
                  {offer.code}
                </div>

                <button
                  onClick={() => handleCopy(offer.code)}
                  className="flex items-center gap-1.5 text-xs font-bold text-white bg-[#D82289] hover:bg-[#BF1876] px-3.5 py-2 rounded-xl uppercase tracking-wider border border-pink-400/20 transition-colors cursor-pointer shadow-sm"
                >
                  {copiedCode === offer.code ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
