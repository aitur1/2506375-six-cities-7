import OfferCard from '../../components/offer-card/offer-card';

interface MainPageProps {
  offersCount: number;
}

const MainPage = ({ offersCount }: MainPageProps) => (
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
              {offersCount} places to stay in Amsterdam
            </b>

            <div className="cities__places-list places__list tabs__content">
              <OfferCard />
              <OfferCard />
              <OfferCard />
              <OfferCard />
              <OfferCard />
            </div>
          </section>

          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default MainPage;
