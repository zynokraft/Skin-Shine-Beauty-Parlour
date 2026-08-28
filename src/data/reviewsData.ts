import { ReviewItem } from '../types';

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Priya Sundaram',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: '3 days ago',
    serviceUsed: 'O3+ Bridal Glow & Hair Spa',
    comment: 'Skin Shine is genuinely the best beauty parlor in Parappana Agrahara! I took the pre-bridal glowing package and my skin looked so luminous on my wedding day. The staff is extremely polite, takes time without rushing, and the hygiene is top-notch. Highly recommend!',
    isVerified: true,
    helpfulCount: 24,
    images: [
      'https://images.unsplash.com/photo-1512290900672-1f02e71dfcf8?auto=format&fit=crop&w=400&q=80'
    ],
    ownerReply: {
      date: '2 days ago',
      text: 'Thank you so much Priya for your wonderful review! We are delighted that you loved the bridal glow treatment. Wishing you all the happiness!'
    }
  },
  {
    id: 'rev-2',
    author: 'Ananya Hegde',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: '1 week ago',
    serviceUsed: 'Mother & Daughter Pamper Combo',
    comment: 'Took my 6-year old daughter here for her first haircut and nail art while I got my Hydra facial done. The beauticians were so patient, sweet and playful with my daughter! She didn’t cry at all and loved her cute braids. Truly a dedicated place for ladies and kids.',
    isVerified: true,
    helpfulCount: 18,
    images: [
      'https://images.unsplash.com/photo-1595454223600-91fbdd77e231?auto=format&fit=crop&w=400&q=80'
    ],
    ownerReply: {
      date: '5 days ago',
      text: 'Dear Ananya, we loved hosting you and your little princess! Hope to see you both again soon.'
    }
  },
  {
    id: 'rev-3',
    author: 'Kavitha R.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: '2 weeks ago',
    serviceUsed: 'Keratin Hair Smoothening',
    comment: 'Got my keratin treatment done at Skin Shine last month. My hair was extremely frizzy and unmanageable, and now it feels like silk and so glossy even after multiple washes! Prices are very reasonable compared to big chain salons without compromising on product quality.',
    isVerified: true,
    helpfulCount: 31,
    images: [
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=400&q=80'
    ],
  },
  {
    id: 'rev-4',
    author: 'Deepa Narayanan',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: '3 weeks ago',
    serviceUsed: 'Eyebrow Threading & Rica Waxing',
    comment: 'Pain-free eyebrow threading and quick Rica waxing. They sanitized everything right before starting. Very clean chairs and relaxing ambience with soothing pink aesthetics.',
    isVerified: true,
    helpfulCount: 12,
  },
  {
    id: 'rev-5',
    author: 'Shalini Sharma',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: '1 month ago',
    serviceUsed: 'Hydra Glow Deep Cleanse & Pedicure',
    comment: 'The Hydra facial gave instant results! Removed all blackheads and gave an unbelievable hydration glow. Their foot massage during the pedicure is so therapeutic. Must visit parlour in Bangalore!',
    isVerified: true,
    helpfulCount: 15,
    ownerReply: {
      date: '1 month ago',
      text: 'Thank you Shalini! Customer satisfaction is our top priority. We look forward to serving you again!'
    }
  },
  {
    id: 'rev-6',
    author: 'Meenakshi Iyer',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    rating: 4,
    date: '1 month ago',
    serviceUsed: 'Layered Haircut & Blowdry',
    comment: 'Great haircut done by the senior stylist. Took time to suggest the right layers for my round face structure. Only giving 4 stars because weekend had a 15 min wait time, so better to book your slot in advance on their website!',
    isVerified: true,
    helpfulCount: 9,
  }
];
