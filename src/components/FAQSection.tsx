import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do I need an advance appointment or can I walk in?',
      a: 'We welcome both walk-in guests and advance bookings! However, to minimize your wait time, especially on weekends and for specialized treatments like Keratin smoothening or Bridal makeovers, we strongly recommend booking your time slot online or over WhatsApp.',
    },
    {
      q: 'What hygiene measures and products do you use?',
      a: "Hygiene is our hallmark. We use sterilized stainless steel tools, disposable bed sheets, single-use wax strips, sanitized makeup brushes, and premium certified products from L'Oréal Paris, O3+, and Italian Rica Wax.",
    },
    {
      q: 'Is the Kids corner safe and suitable for toddlers?',
      a: 'Yes, absolutely! We have specialized kid-sized sanitized scissors, gentle sulphate-free shampoos, peelable non-toxic nail polish, and patient stylists who know how to keep toddlers engaged and cheerful.',
    },
    {
      q: 'Do you offer trial makeup for brides?',
      a: 'Yes! We offer pre-bridal consultations and HD makeup trials so you can test shades, hairstyles, and contouring before your big day.',
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept Google Pay, PhonePe, Paytm, UPI QR code, Credit/Debit Cards, and Cash.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white relative border-b border-pink-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-pink-50 text-[#D82289] text-xs font-bold uppercase tracking-wider mb-2 rounded-full border border-pink-200">
            <HelpCircle className="w-3.5 h-3.5 text-[#D82289]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#200B26]">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-[#D82289] rounded-full mx-auto my-3" />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-pink-200/80 rounded-2xl bg-pink-50/40 overflow-hidden transition-all hover:border-[#D82289]/50 shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#200B26] hover:text-[#D82289] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D82289] transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-pink-200 pt-3 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
