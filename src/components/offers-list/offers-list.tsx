import { useState } from 'react';
import OfferCard from '../offer-card/offer-card';
import { Offer } from '../../types/offer';

interface OffersListProps {
  offers: Offer[];
  isFavoritePage?: boolean;
}

const OffersList = ({ offers, isFavoritePage = false }: OffersListProps) => {
  const [, setActiveOffer] = useState<Offer | null>(null);

  return (
    <>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          isFavoritePage={isFavoritePage}
          onMouseEnter={() => setActiveOffer(offer)}
          onMouseLeave={() => setActiveOffer(null)}
        />
      ))}
    </>
  );
};

export default OffersList;
