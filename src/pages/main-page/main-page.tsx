import OffersList from '../../components/offers-list/offers-list';
import { Offer } from '../../types/offer';
import { useState } from 'react';
import Map from '../../components/map/map';

interface MainPageProps {
  offers: Offer[];
}

const MainPage = ({ offers }: MainPageProps) => {
  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active" href="#">
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

      <main className="page__main page__main--index">
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h1 className="visually-hidden">Cities</h1>

              <b className="places__found">
                {offers.length} places to stay in Amsterdam
              </b>

              <div className="cities__places-list places__list tabs__content">
                <OffersList
                  offers={offers}
                  onActiveOfferChange={setActiveOffer}
                />
              </div>
            </section>

            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offers} activeOffer={activeOffer} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
