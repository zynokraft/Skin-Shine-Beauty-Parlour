import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OffersBanner } from './components/OffersBanner';
import { ServicesSection } from './components/ServicesSection';
import { BridalSection } from './components/BridalSection';
import { KidsCorner } from './components/KidsCorner';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { WriteReviewModal } from './components/WriteReviewModal';
import { SkinConsultationQuiz } from './components/SkinConsultationQuiz';
import { FloatingActions } from './components/FloatingActions';
import { ServiceItem, ReviewItem } from './types';
import { INITIAL_REVIEWS } from './data/reviewsData';
import { SERVICES_DATA } from './data/servicesData';

export default function App() {
  const [selectedServices, setSelectedServices] = useState<ServiceItem[]>(() => {
    // Initial pre-selected popular service for easy checkout preview
    const saved = localStorage.getItem('skin_shine_selected_services');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [SERVICES_DATA[0]]; // Default Hydra Facial preselected
  });

  const [reviews, setReviews] = useState<ReviewItem[]>(() => {
    const saved = localStorage.getItem('skin_shine_live_reviews');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_REVIEWS;
      }
    }
    return INITIAL_REVIEWS;
  });

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // Sync state to local storage
  useEffect(() => {
    localStorage.setItem('skin_shine_selected_services', JSON.stringify(selectedServices));
  }, [selectedServices]);

  useEffect(() => {
    localStorage.setItem('skin_shine_live_reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleToggleService = (service: ServiceItem) => {
    setSelectedServices((prev) => {
      const exists = prev.some((s) => s.id === service.id);
      if (exists) {
        return prev.filter((s) => s.id !== service.id);
      } else {
        return [...prev, service];
      }
    });
  };

  const handleAddReview = (newReview: ReviewItem) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  const handleHelpfulVote = (reviewId: string) => {
    setReviews((prev) =>
      prev.map((r) =>
        r.id === reviewId ? { ...r, helpfulCount: r.helpfulCount + 1 } : r
      )
    );
  };

  const handleSelectRecommendedService = (service: ServiceItem) => {
    setSelectedServices((prev) => {
      const exists = prev.some((s) => s.id === service.id);
      if (exists) return prev;
      return [...prev, service];
    });
    setIsBookingOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#200B26] antialiased selection:bg-[#D82289] selection:text-white">
      {/* Navigation Header */}
      <Header
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        selectedServices={selectedServices}
        onOpenLocation={() => scrollToSection('location')}
      />

      <main className="flex-1">
        {/* Hero Banner with Logo Emblem & Live Rating */}
        <Hero
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenQuiz={() => setIsQuizOpen(true)}
          onViewServices={() => scrollToSection('services')}
        />

        {/* Exclusive Promo Offers & Vouchers */}
        <OffersBanner onBookWithOffer={() => setIsBookingOpen(true)} />

        {/* Filterable Services Rate Card & Booking Basket */}
        <ServicesSection
          selectedServices={selectedServices}
          onToggleService={handleToggleService}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Luxury Bridal Studio Section */}
        <BridalSection
          onBookBridal={() => {
            const bridalService = SERVICES_DATA.find((s) => s.category === 'bridal');
            if (bridalService) {
              handleToggleService(bridalService);
            }
            setIsBookingOpen(true);
          }}
        />

        {/* Dedicated Kids & Mom-Daughter Corner */}
        <KidsCorner
          onBookKids={() => {
            const kidsService = SERVICES_DATA.find((s) => s.category === 'kids');
            if (kidsService) {
              handleToggleService(kidsService);
            }
            setIsBookingOpen(true);
          }}
        />

        {/* Visual Portfolio & Transformations */}
        <GallerySection />

        {/* Live Customer Reviews & Google Maps 4.9 Star Rating */}
        <ReviewsSection
          reviews={reviews}
          onOpenWriteReview={() => setIsWriteReviewOpen(true)}
          onHelpfulVote={handleHelpfulVote}
        />

        {/* Location, Google Map & Operating Hours */}
        <LocationSection />

        {/* FAQ Accordion */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenLocation={() => scrollToSection('location')}
      />

      {/* Floating Call, WhatsApp and Quick Basket Actions */}
      <FloatingActions
        onOpenBooking={() => setIsBookingOpen(true)}
        selectedServices={selectedServices}
      />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedServices={selectedServices}
        onToggleService={handleToggleService}
      />

      <WriteReviewModal
        isOpen={isWriteReviewOpen}
        onClose={() => setIsWriteReviewOpen(false)}
        onAddReview={handleAddReview}
      />

      <SkinConsultationQuiz
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectRecommendedService={handleSelectRecommendedService}
      />
    </div>
  );
}

