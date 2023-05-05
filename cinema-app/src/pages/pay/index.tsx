import CardInput from '@/components/CardInput/CardInput';
import styles from '../../components/BookingCard/BookingCard.module.scss';
import { normalizeTime } from '@/components/Card/Card';

const PayPage = () => {
  const film = {
    id: 1,
    title: 'Джон Уик 4',
    description:
      'Оставляя за собой горы трупов, Джон Уик продолжает скрываться от всевозможных наёмных убийц, и теперь охоту на него возглавляет молодой и честолюбивый член Правления по имени Маркиз. Два управляющих отелями «Континенталь» в Нью-Йорке и Осаке, решившие по старой дружбе помочь своенравному киллеру, уже жестоко за это поплатились, но внезапно Джон узнаёт способ выбраться из этой, казалось бы, безвыходной ситуации.',
    rating: '9',
    poster_url: 'john-wick-4.jpg',
    createdAt: '2023-05-05T16:39:05.173Z',
    updatedAt: '2023-05-05T16:39:05.173Z',
  };

  const session =  {
    "id": 1,
    "film_id": 1,
    "date": "2023-05-05T00:00:00.000Z",
    "start_time": "2023-05-05T18:41:00.000Z",
    "end_time": "2023-05-05T19:42:00.000Z",
    "price": 25,
    "booking_expiry": "2023-05-05T16:39:00.000Z",
    "createdAt": "2023-05-05T16:39:36.041Z",
    "updatedAt": "2023-05-05T16:39:36.041Z"}


  return (
    <div>
      <CardInput label={'Оплата билетов'} />
      <div className={styles.bookingCard}>
        {film && (
          <>
            <img
              src={`http://localhost:7000/images/${film[0].poster_url}`}
              alt="Movie Poster"
              className={styles.moviePicture}
            />

            <div className={styles.details}>
              <h3 className={styles.title}>{film.title}</h3>
              <p>места:</p>
              {booking.map((item) => (
                <p key={item.id}>
                  {'ряд: ' + item.seat?.row + ' место: ' + item.seat?.seat_number}
                </p>
              ))}
              {session && (
                <>
                  <p className={styles.sessionTime}>
                    {'Время начала: ' + normalizeTime(session!.start_time!.toString())}
                  </p>
                  <button className={styles.button}>{'Оплатить: ' + finalPrice + ' руб'}</button>
                  <p className={styles.bookingExpiry}>
                    {'Оплатить до: ' + normalizeTime(session.booking_expiry!.toString())}
                  </p>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PayPage;
