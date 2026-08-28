import React, { useState } from 'react';
import { Sparkles, Eye, Star } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'bridal' | 'hair' | 'facial' | 'kids'>('all');

  const galleryItems = [
    {
      id: 1,
      category: 'bridal',
      title: 'Traditional South Indian Bridal Glam',
      subtitle: 'HD Waterproof Makeup & Hair Styling',
      image: 'https://images.unsplash.com/photo-1546804784-896d0dca3800?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      category: 'facial',
      title: 'Hydra Facial Glass-Skin Glow',
      subtitle: 'Instant Deep Pore Detox & Plumpness',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      category: 'hair',
      title: 'Keratin Protein Hair Smoothening',
      subtitle: 'Mirror Gloss Sleek Finish',
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      category: 'kids',
      title: 'Princess Braids & Pastel Nails',
      subtitle: 'Gentle Tear-free Styling for Little Ones',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      category: 'hair',
      title: 'Layered Butterfly Haircut & Blowdry',
      subtitle: 'Bouncy Volume & Framing Layers',
      image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      category: 'bridal',
      title: 'Reception Glam & Smokey Eye',
      subtitle: 'Soft Contour & Glitter Finish',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeTab === 'all' || item.category === activeTab
  );

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white relative border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-50 text-[#D82289] text-xs font-bold uppercase tracking-wider mb-3 border border-pink-200">
            <Sparkles className="w-3.5 h-3.5 text-[#D82289]" />
            <span>Our Work & Transformations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#200B26] tracking-tight">
            Captivating Beauty Portfolio
          </h2>
          <div className="w-16 h-1 bg-[#D82289] mx-auto my-3 rounded-full" />
          <p className="mt-2 text-sm text-gray-600">
            Explore real transformations crafted by our talented team of hair artists and skin specialists.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {[
            { id: 'all', label: 'All Showcase' },
            { id: 'bridal', label: '👑 Bridal & Makeover' },
            { id: 'facial', label: '🌸 Facials & Glow' },
            { id: 'hair', label: '💇‍♀️ Hair & Keratin' },
            { id: 'kids', label: '🧸 Kids Styling' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap border ${
                activeTab === tab.id
                  ? 'bg-[#D82289] text-white border-[#D82289] shadow-md shadow-[#D82289]/20'
                  : 'bg-white text-gray-600 border-pink-200 hover:bg-pink-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-pink-100 shadow-sm hover:border-[#D82289] transition-all duration-300 aspect-[4/3] bg-pink-50"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#200B26]/95 via-[#200B26]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white flex flex-col justify-end">
                <span className="text-[10px] font-bold uppercase tracking-wider text-pink-300">
                  {item.category.toUpperCase()}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                  {item.title}
                </h3>
                <p className="text-xs text-pink-100/80 mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
