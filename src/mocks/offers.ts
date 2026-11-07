import { Offer } from '../types/offer';

const offers: Offer[] = [
  {
    id: 'offer-1',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    previewImage: '/img/apartment-01.jpg',
    isPremium: true,
    isFavorite: false,
    rating: 4.8,
    bedrooms: 3,
    maxAdults: 4,
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cable TV',
      'Fridge'
    ],
    description:
      'A quiet cozy and picturesque apartment near the river in Amsterdam. The building is green and dates from the 18th century.',
    host: {
      name: 'Angelina',
      avatarUrl: '/img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      '/img/room.jpg',
      '/img/apartment-01.jpg',
      '/img/apartment-02.jpg',
      '/img/apartment-03.jpg',
      '/img/studio-01.jpg'
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.374,
        longitude: 4.889,
        zoom: 12
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16
    }
  },
  {
    id: 'offer-2',
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    previewImage: '/img/apartment-02.jpg',
    isPremium: false,
    isFavorite: true,
    rating: 4.2,
    bedrooms: 1,
    maxAdults: 2,
    goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge'],
    description:
      'A comfortable and quiet room in the heart of Amsterdam.',
    host: {
      name: 'Max',
      avatarUrl: '/img/avatar-max.jpg',
      isPro: false
    },
    images: [
      '/img/apartment-02.jpg',
      '/img/room-small.jpg',
      '/img/room.jpg'
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.374,
        longitude: 4.889,
        zoom: 12
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16
    }
  },
  {
    id: 'offer-3',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 150,
    previewImage: '/img/apartment-03.jpg',
    isPremium: true,
    isFavorite: false,
    rating: 4.9,
    bedrooms: 2,
    maxAdults: 3,
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Heating',
      'Kitchen',
      'Dishwasher'
    ],
    description:
      'A stylish apartment with a beautiful view of the Amsterdam canals.',
    host: {
      name: 'Angelina',
      avatarUrl: '/img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      '/img/apartment-03.jpg',
      '/img/apartment-01.jpg',
      '/img/room.jpg'
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.374,
        longitude: 4.889,
        zoom: 12
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16
    }
  },
  {
    id: 'offer-4',
    title: 'Cozy studio in the city center',
    type: 'studio',
    price: 95,
    previewImage: '/img/studio-01.jpg',
    isPremium: false,
    isFavorite: true,
    rating: 4.5,
    bedrooms: 1,
    maxAdults: 2,
    goods: ['Wi-Fi', 'Heating', 'Coffee machine', 'Fridge'],
    description:
      'A cozy studio with everything you need for a pleasant stay.',
    host: {
      name: 'Max',
      avatarUrl: '/img/avatar-max.jpg',
      isPro: false
    },
    images: [
      '/img/studio-01.jpg',
      '/img/room.jpg',
      '/img/apartment-02.jpg'
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.374,
        longitude: 4.889,
        zoom: 12
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16
    }
  }
];

export default offers;
