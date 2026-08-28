export type ServiceCategory =
  | 'all'
  | 'facial'
  | 'hair'
  | 'waxing-threading'
  | 'bridal'
  | 'nails-pedi'
  | 'kids'
  | 'combos';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  price: number;
  originalPrice?: number;
  duration: string;
  target: 'Ladies' | 'Kids' | 'Ladies & Kids' | 'Bridal';
  description: string;
  benefits: string[];
  popular?: boolean;
  isSpecial?: boolean;
  image: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  date: string;
  serviceUsed: string;
  comment: string;
  isVerified: boolean;
  helpfulCount: number;
  images?: string[];
  ownerReply?: {
    date: string;
    text: string;
  };
}

export interface BookingDetails {
  services: ServiceItem[];
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  date: string;
  timeSlot: string;
  clientType: 'ladies' | 'kids' | 'mom_daughter' | 'bridal';
  stylistPreference: 'any' | 'senior' | 'hair_specialist' | 'kids_friendly';
  notes?: string;
  couponCode?: string;
  discountAmount?: number;
  totalAmount: number;
}

export interface QuizAnswer {
  category: 'skin' | 'hair' | 'kids';
  concern: string;
  skinType?: string;
  budget?: string;
}
