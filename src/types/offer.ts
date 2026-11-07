export interface Offer {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  description: string;
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: string[];
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}
