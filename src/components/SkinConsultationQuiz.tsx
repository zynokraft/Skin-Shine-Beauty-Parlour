import React, { useState } from 'react';
import { ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/servicesData';
import {
  Sparkles,
  CheckCircle2,
  X,
  ArrowRight,
  RotateCcw,
  Tag,
  Calendar,
  Heart,
  Smile,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface SkinConsultationQuizProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRecommendedService: (service: ServiceItem) => void;
}

export const SkinConsultationQuiz: React.FC<SkinConsultationQuizProps> = ({
  isOpen,
  onClose,
  onSelectRecommendedService,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [focusGoal, setFocusGoal] = useState<string>('');
  const [skinOrHairType, setSkinOrHairType] = useState<string>('');
  const [timeline, setTimeline] = useState<string>('');
  const [recommendedService, setRecommendedService] = useState<ServiceItem | null>(null);

  if (!isOpen) return null;

  const handleFinishQuiz = () => {
    // Recommendation logic based on quiz choices
    let matchId = 'hydra-facial-glow';

    if (focusGoal === 'bridal') {
      matchId = 'o3-bridal-glow';
    } else if (focusGoal === 'frizz_hair') {
      matchId = 'keratin-smoothening';
    } else if (focusGoal === 'kids') {
      matchId = 'kids-gentle-haircut';
    } else if (focusGoal === 'mom_daughter') {
      matchId = 'mom-and-daughter-pamper';
    } else if (skinOrHairType === 'dehydrated') {
      matchId = 'hydra-facial-glow';
    } else if (skinOrHairType === 'damaged_hair') {
      matchId = 'loreal-hair-spa-steam';
    }

    const matched = SERVICES_DATA.find((s) => s.id === matchId) || SERVICES_DATA[0];
    setRecommendedService(matched);
    setCurrentStep(4);

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#D82289', '#200B26', '#FDF2F4', '#10B981'],
    });
  };

  const handleReset = () => {
    setCurrentStep(1);
    setFocusGoal('');
    setSkinOrHairType('');
    setTimeline('');
    setRecommendedService(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-pink-200 flex flex-col">
        
        {/* Header */}
        <div className="bg-[#200B26] text-white p-5 flex items-center justify-between border-b border-pink-900/40">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#D82289] text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] text-pink-300 font-bold uppercase tracking-wider">
                Skin Shine Consultation
              </div>
              <h3 className="text-lg font-extrabold text-white">Personalized Treatment Finder</h3>
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
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Step 1 of 3</span>
                <span className="font-bold text-[#D82289] uppercase tracking-wider">Primary Goal</span>
              </div>
              <h4 className="text-lg font-extrabold text-[#200B26]">
                What is your main beauty focus right now?
              </h4>

              <div className="space-y-2.5">
                {[
                  { id: 'instant_glow', title: '✨ Instant Glass-Skin Glow & Cleanse', desc: 'De-tan, blackhead removal & hydration' },
                  { id: 'frizz_hair', title: '💆‍♀️ Frizz-Free Silky Smooth Hair', desc: 'Keratin, Botox, or Argan steam spa' },
                  { id: 'bridal', title: '👑 Bridal & Festive Event Radiance', desc: 'High-definition bridal makeover & pre-bridal care' },
                  { id: 'kids', title: '🧸 Safe & Fun Kids Haircut / Styling', desc: 'Gentle tear-free care for little ones' },
                  { id: 'mom_daughter', title: '💖 Mother & Daughter Pamper Session', desc: 'Bonding makeover combo with special savings' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setFocusGoal(item.id);
                      setCurrentStep(2);
                    }}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer ${
                      focusGoal === item.id
                        ? 'border-[#D82289] bg-pink-50 shadow-sm'
                        : 'border-pink-200 hover:border-[#D82289] hover:bg-pink-50/50'
                    }`}
                  >
                    <div className="text-sm font-bold text-[#200B26]">{item.title}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Step 2 of 3</span>
                <span className="font-bold text-[#D82289] uppercase tracking-wider">Skin & Hair Profile</span>
              </div>
              <h4 className="text-lg font-extrabold text-[#200B26]">
                How would you describe your current texture/condition?
              </h4>

              <div className="space-y-2.5">
                {[
                  { id: 'dehydrated', title: '🌸 Dry / Dehydrated / Uneven Tan', desc: 'Needs intense moisture & gentle dead cell polish' },
                  { id: 'oily_pores', title: '🌿 Oily / Clogged Pores & Blackheads', desc: 'Needs deep pore extraction & purifying pack' },
                  { id: 'damaged_hair', title: '💇‍♀️ Dry, Frizzy or Heat-Damaged Hair', desc: 'Needs deep protein nutrition & smoothing' },
                  { id: 'sensitive', title: '✨ Sensitive / Delicate Skin', desc: 'Requires mild Rica wax and herbal organic care' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSkinOrHairType(item.id);
                      setCurrentStep(3);
                    }}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer ${
                      skinOrHairType === item.id
                        ? 'border-[#D82289] bg-pink-50'
                        : 'border-pink-200 hover:border-[#D82289] hover:bg-pink-50/50'
                    }`}
                  >
                    <div className="text-sm font-bold text-[#200B26]">{item.title}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentStep(1)}
                className="text-xs text-gray-500 hover:text-[#200B26] underline cursor-pointer"
              >
                ← Back to Step 1
              </button>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Step 3 of 3</span>
                <span className="font-bold text-[#D82289] uppercase tracking-wider">Timing</span>
              </div>
              <h4 className="text-lg font-extrabold text-[#200B26]">
                When are you looking to visit Skin Shine?
              </h4>

              <div className="space-y-2.5">
                {[
                  { id: 'this_week', title: '📅 Within the next few days', desc: 'Quick weekend or weekday relaxation' },
                  { id: 'upcoming_event', title: '🎉 For an upcoming family wedding/event', desc: 'Pre-event prep for camera radiance' },
                  { id: 'monthly', title: '🔄 Regular monthly maintenance', desc: 'Routine grooming, waxing, and hair trim' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setTimeline(item.id);
                      handleFinishQuiz();
                    }}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer ${
                      timeline === item.id
                        ? 'border-[#D82289] bg-pink-50'
                        : 'border-pink-200 hover:border-[#D82289] hover:bg-pink-50/50'
                    }`}
                  >
                    <div className="text-sm font-bold text-[#200B26]">{item.title}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentStep(2)}
                className="text-xs text-gray-500 hover:text-[#200B26] underline cursor-pointer"
              >
                ← Back to Step 2
              </button>
            </div>
          )}

          {currentStep === 4 && recommendedService && (
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 text-[#D82289] text-xs font-bold border border-pink-200 uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Your Ideal Match is Ready!</span>
              </div>

              <h4 className="text-xl font-extrabold text-[#200B26]">
                {recommendedService.name}
              </h4>

              <div className="p-4 rounded-2xl bg-pink-50/70 border border-pink-200 text-left space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src={recommendedService.image}
                    alt={recommendedService.name}
                    className="w-16 h-16 rounded-xl object-cover border border-pink-200"
                  />
                  <div>
                    <div className="text-sm font-bold text-[#200B26]">
                      {recommendedService.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {recommendedService.duration} • {recommendedService.target}
                    </div>
                    <div className="text-base font-extrabold text-[#D82289] mt-0.5">
                      ₹{recommendedService.price.toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {recommendedService.description}
                </p>

                <div className="bg-white p-2.5 rounded-xl border border-pink-200 flex items-center justify-between text-xs">
                  <span className="text-gray-600">Exclusive Quiz Voucher:</span>
                  <span className="font-mono font-bold text-[#D82289] bg-pink-50 px-2 py-0.5 rounded-lg border border-pink-200">
                    SHINEFIRST20 (20% OFF)
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={() => {
                    onSelectRecommendedService(recommendedService);
                    onClose();
                  }}
                  className="w-full py-3.5 rounded-2xl bg-[#D82289] hover:bg-[#BF1876] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#D82289]/30 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Book This Recommended Treatment</span>
                </button>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-[#200B26] py-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Retake Quiz</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
