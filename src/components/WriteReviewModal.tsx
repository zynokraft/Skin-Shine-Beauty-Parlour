import React, { useState } from 'react';
import { ReviewItem } from '../types';
import { Star, X, Upload, Sparkles, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

interface WriteReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddReview: (review: ReviewItem) => void;
}

export const WriteReviewModal: React.FC<WriteReviewModalProps> = ({
  isOpen,
  onClose,
  onAddReview,
}) => {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [author, setAuthor] = useState('');
  const [serviceUsed, setServiceUsed] = useState('Hydra Glow Deep Cleanse');
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !comment) return;

    const newReview: ReviewItem = {
      id: `rev-${Date.now()}`,
      author,
      rating,
      date: 'Just now',
      serviceUsed,
      comment,
      isVerified: true,
      helpfulCount: 0,
      avatar: `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(author)}`,
      ownerReply: {
        date: 'Just now',
        text: `Thank you so much ${author} for visiting Skin Shine Beauty Parlor! We are grateful for your review and look forward to serving you again.`
      }
    };

    onAddReview(newReview);
    setIsSubmitted(true);

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#D82289', '#200B26', '#FDF2F4', '#10B981'],
    });
  };

  const servicesOptions = [
    'Hydra Glow Deep Cleanse',
    'O3+ Bridal Radiance Facial',
    'Diamond Sparkle Polish Facial',
    'Keratin Hair Smoothening',
    "L'Oréal Moroccan Argan Hair Spa",
    'Layered / Feather Haircut',
    'Eyebrow & Upper Lip Threading',
    'Full Body Rica Waxing',
    'Royal HD Bridal Makeover',
    'Rose Petal Spa Pedicure',
    'Kids Fun & Gentle Haircut',
    'Mother & Daughter Pamper Duo',
    'Other Beauty Treatment'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-pink-200 flex flex-col">
        
        {/* Header */}
        <div className="bg-[#200B26] text-white p-5 flex items-center justify-between border-b border-pink-900/40">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#D82289] text-white">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] text-pink-300 font-bold uppercase tracking-wider">
                Skin Shine Community
              </div>
              <h3 className="text-lg font-extrabold text-white">Write a Google Review</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-[#D82289] text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-pink-50 text-[#D82289] border border-pink-200 flex items-center justify-center shadow-inner animate-bounce">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-xl font-extrabold text-[#200B26]">
                Review Posted Successfully!
              </h4>
              <p className="text-xs text-gray-600">
                Your {rating}-star rating has been added to our live customer reviews. Thank you for supporting local women entrepreneurs!
              </p>

              <div className="pt-3 flex flex-col gap-2">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Skin%20Shine%20Beauty%20Parlor&query_place_id=ChIJtWNsQQATrjsR3TA-kf_AmB8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#D82289] hover:bg-[#BF1876] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#D82289]/20 transition-colors"
                >
                  <Star className="w-4 h-4 fill-white" />
                  <span>Also Post Directly on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={onClose}
                  className="py-2 text-xs text-gray-500 hover:text-[#200B26] font-bold uppercase tracking-wider cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Star Rating Picker */}
              <div className="text-center py-3.5 bg-pink-50/70 rounded-2xl border border-pink-200">
                <label className="block text-[10px] font-bold text-[#200B26] mb-2 uppercase tracking-wider">
                  Your Overall Experience
                </label>
                <div className="flex items-center justify-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const isFilled = (hoverRating || rating) >= star;
                    return (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 text-2xl transition-transform hover:scale-115 focus:outline-none cursor-pointer"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            isFilled
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
                <div className="text-xs font-extrabold text-[#D82289] mt-1.5">
                  {rating === 5
                    ? 'Outstanding! Highly Recommended (5/5)'
                    : rating === 4
                    ? 'Very Good Experience (4/5)'
                    : rating === 3
                    ? 'Average (3/5)'
                    : 'Needs Improvement'}
                </div>
              </div>

              {/* Name & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#200B26] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Swathi R."
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-pink-200 bg-white text-xs text-[#200B26] focus:ring-2 focus:ring-[#D82289] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#200B26] mb-1">
                    Service Availed *
                  </label>
                  <select
                    value={serviceUsed}
                    onChange={(e) => setServiceUsed(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-pink-200 bg-white text-xs text-[#200B26] focus:ring-2 focus:ring-[#D82289] outline-none"
                  >
                    {servicesOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Review Text */}
              <div>
                <label className="block text-xs font-bold text-[#200B26] mb-1">
                  Your Honest Feedback & Experience *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell us about the hygiene, beautician care, hair/skin results, or kids friendliness..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-pink-200 bg-white text-xs text-[#200B26] focus:ring-2 focus:ring-[#D82289] outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-[#D82289] hover:bg-[#BF1876] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#D82289]/20 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>Submit Live Review</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
