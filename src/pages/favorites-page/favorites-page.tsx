import OffersList from '../../components/offers-list/offers-list';
import { Offer } from '../../types/offer';

interface FavoritesPageProps {
  offers: Offer[];
}

const FavoritesPage = ({ offers }: FavoritesPageProps) => {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="/">
                <img
                  className="header__logo"
                  src="/img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>

            {favoriteOffers.length > 0 ? (
              <ul className="favorites__list">
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>Amsterdam</span>
                      </a>
                    </div>
                  </div>

                  <div className="favorites__places">
                    <OffersList offers={favoriteOffers} isFavoritePage />
                  </div>
                </li>
              </ul>
            ) : (
              <p>No saved offers yet.</p>
            )}
          </section>
        </div>
      </main>

      <footer className="footer container">
        <a className="footer__logo-link" href="/">
          <img
            className="footer__logo"
            src="/img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
};

export default FavoritesPage;
