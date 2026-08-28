import React, { useState, useMemo } from 'react';
import { ServiceCategory, ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/servicesData';
import {
  Sparkles,
  Clock,
  Check,
  Plus,
  Search,
  SlidersHorizontal,
  Info,
  X,
  Heart,
  Calendar,
  Baby,
  Crown,
  Scissors,
  Eye,
} from 'lucide-react';

interface ServicesSectionProps {
  selectedServices: ServiceItem[];
  onToggleService: (service: ServiceItem) => void;
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  selectedServices,
  onToggleService,
  onOpenBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [targetFilter, setTargetFilter] = useState<'All' | 'Ladies' | 'Kids' | 'Bridal'>('All');
  const [detailService, setDetailService] = useState<ServiceItem | null>(null);

  const categories: { id: ServiceCategory; label: string; icon: string }[] = [
    { id: 'all', label: 'All Services', icon: '✨' },
    { id: 'facial', label: 'Facials & Skin Glow', icon: '🌸' },
    { id: 'hair', label: 'Hair Care & Styling', icon: '💇‍♀️' },
    { id: 'waxing-threading', label: 'Waxing & Threading', icon: '🌿' },
    { id: 'bridal', label: 'Bridal & Makeup', icon: '👑' },
    { id: 'nails-pedi', label: 'Nails & Pedicure', icon: '💅' },
    { id: 'kids', label: 'Kids Corner', icon: '🧸' },
    { id: 'combos', label: 'Value Combos', icon: '🎁' },
  ];

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((service) => {
      const matchesCategory =
        activeCategory === 'all' || service.category === activeCategory;
      const matchesTarget =
        targetFilter === 'All' ||
        service.target === targetFilter ||
        service.target === 'Ladies & Kids';
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.benefits.some((b) =>
          b.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesTarget && matchesSearch;
    });
  }, [activeCategory, targetFilter, searchQuery]);

  const isSelected = (id: string) =>
    selectedServices.some((item) => item.id === id);

  return (
    <section id="services" className="py-16 sm:py-20 bg-white relative border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-[#D82289] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D82289]" />
            <span>Complete Price Menu & Rate Card</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#200B26] tracking-tight">
            Our Services & Transparent Pricing
          </h2>
          <div className="w-16 h-1 bg-[#D82289] mx-auto my-3 rounded-full" />
          <p className="mt-2 text-sm text-gray-600">
            Enjoy premium care with 100% genuine herbal, O3+, L'Oréal & Italian Rica products. Select your desired treatments to book in one tap.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D82289]" />
              <input
                type="text"
                placeholder="Search treatments (e.g. Hydra facial, Keratin, Kids haircut, Threading)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-pink-50/40 border border-pink-200 rounded-2xl focus:border-[#D82289] focus:bg-white text-sm text-[#200B26] outline-none transition-all placeholder:text-gray-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Target Audience Pill Filter */}
            <div className="flex items-center gap-1.5 bg-pink-50 p-1.5 rounded-2xl border border-pink-200 text-xs font-medium w-full md:w-auto overflow-x-auto">
              <span className="px-2 text-gray-500 text-xs font-bold hidden sm:inline">For:</span>
              {(['All', 'Ladies', 'Kids', 'Bridal'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setTargetFilter(filter)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    targetFilter === filter
                      ? 'bg-[#D82289] text-white shadow-sm'
                      : 'text-gray-600 hover:bg-pink-100'
                  }`}
                >
                  {filter === 'Kids' ? '🧸 Kids' : filter === 'Bridal' ? '👑 Bridal' : filter}
                </button>
              ))}
            </div>

          </div>

          {/* Category Tabs Scrollable */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer border ${
                  activeCategory === cat.id
                    ? 'bg-[#D82289] text-white border-[#D82289] shadow-md shadow-[#D82289]/20'
                    : 'bg-pink-50/50 text-[#200B26] border-pink-200 hover:bg-pink-100/60'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Services Counter Bar */}
        {selectedServices.length > 0 && (
          <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-[#200B26] to-[#330C3E] text-white flex flex-wrap items-center justify-between gap-4 shadow-lg border border-pink-800/40 animate-in fade-in duration-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#D82289] flex items-center justify-center font-bold text-white shadow-sm">
                {selectedServices.length}
              </div>
              <div>
                <div className="text-sm font-bold text-white">
                  {selectedServices.length} {selectedServices.length === 1 ? 'Service' : 'Services'} Selected in Basket
                </div>
                <div className="text-xs text-pink-200">
                  Total: ₹{selectedServices.reduce((sum, s) => sum + s.price, 0).toLocaleString('en-IN')} (Before Promo Voucher)
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-[#D82289] hover:bg-[#BF1876] text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md shadow-[#D82289]/30 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Proceed to Book Slot</span>
            </button>
          </div>
        )}

        {/* Service Cards Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-pink-50/50 rounded-3xl border border-dashed border-pink-200 p-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-pink-100 text-[#D82289] flex items-center justify-center text-2xl">
              🔍
            </div>
            <h3 className="text-lg font-bold text-[#200B26]">No matching services found</h3>
            <p className="text-sm text-gray-500 mt-1">
              Try searching for something else or reset your filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setTargetFilter('All');
              }}
              className="mt-4 px-4 py-2 bg-[#D82289] text-white rounded-xl text-xs font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const selected = isSelected(service.id);
              return (
                <div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  className={`group relative bg-white rounded-3xl border transition-all duration-200 overflow-hidden flex flex-col justify-between ${
                    selected
                      ? 'border-[#D82289] ring-2 ring-[#D82289]/30 shadow-lg shadow-pink-100'
                      : 'border-pink-100 hover:border-[#D82289]/40 hover:shadow-md'
                  }`}
                >
                  {/* Top Image & Badges */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-pink-50">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Target & Special Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-[#200B26] text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        {service.target === 'Kids' ? '🧸 Kids' : service.target === 'Bridal' ? '👑 Bridal' : service.target}
                      </span>
                      {service.popular && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#D82289] text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                          <Sparkles className="w-3 h-3" /> Most Booked
                        </span>
                      )}
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 left-3 text-white text-xs font-medium flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
                      <Clock className="w-3.5 h-3.5 text-pink-200" />
                      <span>{service.duration}</span>
                    </div>

                    {/* Quick Info Button */}
                    <button
                      onClick={() => setDetailService(service)}
                      className="absolute bottom-3 right-3 p-1.5 rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-[#D82289] transition-colors shadow-sm cursor-pointer"
                      title="View Details & Care Tips"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-[#200B26] group-hover:text-[#D82289] transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-2 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Benefits Bullets */}
                      <ul className="mt-3 space-y-1.5">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                            <Check className="w-3.5 h-3.5 text-[#D82289] flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price and Add/Remove Action */}
                    <div className="mt-5 pt-4 border-t border-pink-100 flex items-center justify-between gap-3">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg font-extrabold text-[#200B26]">
                            ₹{service.price.toLocaleString('en-IN')}
                          </span>
                          {service.originalPrice && (
                            <span className="text-xs text-gray-400 line-through">
                              ₹{service.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>
                        {service.originalPrice && (
                          <div className="text-[10px] text-emerald-600 font-bold">
                            Save ₹{(service.originalPrice - service.price).toLocaleString('en-IN')}
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => onToggleService(service)}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                          selected
                            ? 'bg-[#200B26] text-white shadow-sm'
                            : 'bg-pink-50 hover:bg-[#D82289] text-[#D82289] hover:text-white border border-pink-200'
                        }`}
                      >
                        {selected ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-pink-200" />
                            <span>Selected</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Service Details Modal */}
      {detailService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-pink-200">
            <div className="relative aspect-[16/9] bg-pink-100">
              <img
                src={detailService.image}
                alt={detailService.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setDetailService(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D82289] bg-pink-50 px-2.5 py-1 rounded-full border border-pink-200">
                  {detailService.category}
                </span>
                <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#D82289]" />
                  {detailService.duration}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#200B26]">
                {detailService.name}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {detailService.description}
              </p>

              <div>
                <h4 className="text-xs font-bold text-[#200B26] uppercase tracking-wider mb-2">
                  Key Benefits & Treatment Steps
                </h4>
                <ul className="space-y-2">
                  {detailService.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                      <Check className="w-4 h-4 text-[#D82289] flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-pink-100 flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-500">Service Fee</div>
                  <div className="text-2xl font-extrabold text-[#D82289]">
                    ₹{detailService.price.toLocaleString('en-IN')}
                  </div>
                </div>

                <button
                  onClick={() => {
                    onToggleService(detailService);
                    setDetailService(null);
                  }}
                  className={`px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    isSelected(detailService.id)
                      ? 'bg-[#200B26] text-white'
                      : 'bg-[#D82289] hover:bg-[#BF1876] text-white shadow-md shadow-[#D82289]/25'
                  }`}
                >
                  {isSelected(detailService.id) ? 'Remove Service' : 'Select for Appointment'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
