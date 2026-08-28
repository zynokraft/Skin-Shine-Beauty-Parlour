import React, { useState } from 'react';
import { ReviewItem } from '../types';
import {
  Star,
  Sparkles,
  ExternalLink,
  ThumbsUp,
  MessageCircle,
  ShieldCheck,
  Award,
  PenTool,
  CheckCircle2,
} from 'lucide-react';

interface ReviewsSectionProps {
  reviews: ReviewItem[];
  onOpenWriteReview: () => void;
  onHelpfulVote: (id: string) => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  reviews,
  onOpenWriteReview,
  onHelpfulVote,
}) => {
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const totalReviews = reviews.length;
  const averageRating = (
    reviews.reduce((acc, curr) => acc + curr.rating, 0) / totalReviews
  ).toFixed(1);

  const starCounts = {
    5: reviews.filter((r) => r.rating === 5).length,
    4: reviews.filter((r) => r.rating === 4).length,
    3: reviews.filter((r) => r.rating === 3).length,
    2: reviews.filter((r) => r.rating === 2).length,
    1: reviews.filter((r) => r.rating === 1).length,
  };

  const filteredReviews = reviews.filter((r) => {
    const matchRating = filterRating === 'all' || r.rating === filterRating;
    const matchCategory =
      filterCategory === 'all' ||
      r.serviceUsed.toLowerCase().includes(filterCategory.toLowerCase());
    return matchRating && matchCategory;
  });

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-white relative border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-50 text-[#D82289] text-xs font-bold uppercase tracking-wider mb-3 border border-pink-200">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Google Maps Verified Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#200B26] tracking-tight">
            Real Stories & 4.9 Star Ratings
          </h2>
          <div className="w-16 h-1 bg-[#D82289] mx-auto my-3 rounded-full" />
          <p className="mt-2 text-sm text-gray-600">
            See why ladies, brides, and parents in Parappana Agrahara & Electronic City rate Skin Shine with 4.9 stars on Google Maps.
          </p>
        </div>

        {/* Rating Breakdown & Summary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
          
          {/* Left: Overall Score Card */}
          <div className="lg:col-span-4 bg-gradient-to-br from-pink-50 via-white to-pink-50/60 p-6 sm:p-8 rounded-3xl border border-pink-200 shadow-sm flex flex-col justify-between text-center">
            <div>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-100 text-amber-500 mb-3 shadow-inner">
                <Star className="w-8 h-8 fill-amber-400 text-amber-400" />
              </div>
              <div className="text-5xl font-extrabold text-[#200B26]">
                {averageRating}
                <span className="text-xl text-gray-400 font-normal"> / 5.0</span>
              </div>
              <div className="flex items-center justify-center gap-1 mt-2 text-amber-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <div className="text-xs text-gray-500 mt-2 font-medium">
                Based on 120+ verified Google Ratings & Customer Reviews
              </div>
            </div>

            <div className="pt-6 border-t border-pink-200 space-y-2.5 mt-6">
              <button
                onClick={onOpenWriteReview}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#D82289] hover:bg-[#BF1876] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#D82289]/30 transition-all cursor-pointer"
              >
                <PenTool className="w-4 h-4 text-white" />
                <span>Write a Live Review</span>
              </button>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Skin%20Shine%20Beauty%20Parlor&query_place_id=ChIJtWNsQQATrjsR3TA-kf_AmB8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-2xl bg-white hover:bg-pink-50 text-[#200B26] font-bold text-xs uppercase tracking-wider border border-pink-200 transition-colors"
              >
                <span>View Google Maps Listing</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#D82289]" />
              </a>
            </div>
          </div>

          {/* Right: Star Breakdown Progress Bars & Trust Points */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-pink-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-[#200B26] uppercase tracking-wider">
                Rating Distribution
              </h3>

              {[5, 4, 3, 2, 1].map((stars) => {
                const count = starCounts[stars as keyof typeof starCounts] || 0;
                const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
                return (
                  <div key={stars} className="flex items-center gap-3 text-xs">
                    <span className="w-12 font-bold text-[#200B26] flex items-center gap-1">
                      {stars} <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    </span>
                    <div className="flex-1 h-3 bg-pink-50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-400 to-[#D82289] rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="w-12 text-right text-gray-500 font-semibold">
                      {count} ({Math.round(percentage)}%)
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Quality Metrics */}
            <div className="pt-6 border-t border-pink-200 grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-pink-50 text-[#D82289] border border-pink-200">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#200B26]">100% Hygiene</div>
                  <div className="text-[10px] text-gray-500">Sanitized Stations</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-pink-50 text-[#D82289] border border-pink-200">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#200B26]">Authentic Brands</div>
                  <div className="text-[10px] text-gray-500">O3+, L'Oreal, Rica</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-pink-50 text-[#D82289] border border-pink-200">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#200B26]">Kids Friendly</div>
                  <div className="text-[10px] text-gray-500">Patient Beauticians</div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Filter:</span>
            <button
              onClick={() => setFilterRating('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
                filterRating === 'all'
                  ? 'bg-[#200B26] text-white border-[#200B26]'
                  : 'bg-white text-[#200B26] border-pink-200 hover:bg-pink-50'
              }`}
            >
              All Stars ({totalReviews})
            </button>
            <button
              onClick={() => setFilterRating(5)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
                filterRating === 5
                  ? 'bg-[#200B26] text-white border-[#200B26]'
                  : 'bg-white text-[#200B26] border-pink-200 hover:bg-pink-50'
              }`}
            >
              ⭐ 5 Stars Only
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Treatment:</span>
            {['all', 'Bridal', 'Hydra', 'Hair', 'Waxing', 'Kids'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer border ${
                  filterCategory === cat
                    ? 'bg-[#D82289] text-white border-[#D82289]'
                    : 'bg-white text-gray-600 border-pink-200 hover:bg-pink-50'
                }`}
              >
                {cat === 'all' ? 'All Treatments' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-3xl border border-pink-100 shadow-sm hover:border-[#D82289] transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                {/* Author Info & Rating */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar || `https://api.dicebear.com/7.x/adventurer/svg?seed=${rev.author}`}
                      alt={rev.author}
                      className="w-10 h-10 rounded-full object-cover border border-pink-200 bg-pink-50"
                    />
                    <div>
                      <div className="text-sm font-bold text-[#200B26] flex items-center gap-1.5">
                        <span>{rev.author}</span>
                        {rev.isVerified && (
                          <span className="text-[9px] bg-pink-50 text-[#D82289] border border-pink-200 rounded-md px-1.5 py-0.5 font-semibold uppercase">
                            ✓ Verified
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-gray-400">{rev.date}</div>
                    </div>
                  </div>

                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Service Tag */}
                <div className="mt-3">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-pink-50 text-[#D82289] text-[10px] font-bold uppercase tracking-wider border border-pink-200">
                    ✦ {rev.serviceUsed}
                  </span>
                </div>

                {/* Comment */}
                <p className="mt-3 text-xs text-gray-700 leading-relaxed">
                  "{rev.comment}"
                </p>

                {/* Attached photo thumbnail if available */}
                {rev.images && rev.images.length > 0 && (
                  <div className="mt-3 flex gap-2">
                    {rev.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt="Customer photo"
                        className="w-16 h-16 rounded-xl object-cover border border-pink-200 shadow-sm"
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Owner Reply if available */}
              {rev.ownerReply && (
                <div className="p-3.5 rounded-2xl bg-pink-50/80 border border-pink-200 text-xs space-y-1">
                  <div className="font-bold text-[#200B26] flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 text-[#D82289]" />
                    <span>Response from Skin Shine</span>
                    <span className="text-[10px] text-gray-400 font-normal">({rev.ownerReply.date})</span>
                  </div>
                  <p className="text-gray-600 italic">
                    "{rev.ownerReply.text}"
                  </p>
                </div>
              )}

              {/* Helpful footer */}
              <div className="pt-3 border-t border-pink-100 flex items-center justify-between text-xs text-gray-400">
                <button
                  onClick={() => onHelpfulVote(rev.id)}
                  className="flex items-center gap-1.5 hover:text-[#D82289] transition-colors cursor-pointer"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Helpful ({rev.helpfulCount})</span>
                </button>

                <span className="text-[10px] text-[#D82289] font-semibold uppercase tracking-wider">
                  Verified Visit
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
