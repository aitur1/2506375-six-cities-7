import OfferCard from '../offer-card/offer-card';
import { Offer } from '../../types/offer';

interface OffersListProps {
  offers: Offer[];
  isFavoritePage?: boolean;
  onActiveOfferChange?: (offer: Offer | null) => void;
}

const OffersList = ({
  offers,
  isFavoritePage = false,
  onActiveOfferChange
}: OffersListProps) => (
  <>
    {offers.map((offer) => (
      <OfferCard
        key={offer.id}
        offer={offer}
        isFavoritePage={isFavoritePage}
        onMouseEnter={() => onActiveOfferChange?.(offer)}
        onMouseLeave={() => onActiveOfferChange?.(null)}
      />
    ))}
  </>
);

export default OffersList;
