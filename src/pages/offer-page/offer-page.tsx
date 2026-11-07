import { useParams } from 'react-router-dom';
import CommentForm from '../../components/comment-form/comment-form';
import { Offer } from '../../types/offer';

interface OfferPageProps {
  offers: Offer[];
}

const OfferPage = ({ offers }: OfferPageProps) => {
  const { id } = useParams();

  const offer = offers.find((item) => item.id === id);

  if (!offer) {
    return (
      <div className="page">
        <main className="page__main">
          <div className="container">
            <h1>Offer not found</h1>
            <a href="/">Вернуться на главную</a>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="page">
      <main className="page__main page__main--offer">
        <div className="page__offer">
          <section className="offer">
            <div className="offer__container container">
              <h1 className="offer__name">{offer.title}</h1>

              <p className="offer__price">
                €{offer.price} / night
              </p>

              <p className="offer__type">{offer.type}</p>

              <p>{offer.description}</p>

              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews
                  <span className="reviews__amount"> (0)</span>
                </h2>

                <CommentForm />
              </section>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default OfferPage;
