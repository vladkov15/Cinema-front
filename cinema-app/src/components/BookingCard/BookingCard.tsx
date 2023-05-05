import React, { useState } from 'react';
import styles from './BookingCard.module.scss';
import { Booking } from '@/models/models';
import { filmApi } from '@/services/FilmService';
import { sessionApi } from '@/services/SessionService';
import { normalizeTime } from '../Card/Card';

interface BookingProps {
  booking: Booking[];
}

const BookingCard: React.FC<BookingProps> = ({ booking }) => {
  const { data: film } = filmApi.useFetchFilmByIdQuery(booking[0].film_id!);
  const { data: session } = sessionApi.useFetchBySessionsssQuery(booking[0].session_id!);
  let finalPrice: number = 0;
  for (let index = 0; index < booking.length; index++) {
    finalPrice += booking[index].price!
  }
  
  return (
    <div className={styles.bookingCard}>
      {film && (
        <>
          <img
            src={`http://localhost:7000/images/${film[0].poster_url}`}
            alt="Movie Poster"
            className={styles.moviePicture}
          />

          <div className={styles.details}>
            <h3 className={styles.title}>{film[0].title}</h3>
            <p>места:</p>
            {booking.map((item) => (
              <p key={item.id}>{'ряд: ' + item.seat?.row + ' место: ' + item.seat?.seat_number}</p>
            ))}
            {session && (
              <>
                <p className={styles.sessionTime}>
                  
                  {'Время начала: ' + normalizeTime(session[0]!.start_time!.toString())}
                </p>
                <button className={styles.button}>{'Оплатить: ' + finalPrice + ' руб' }</button>
                <p className={styles.bookingExpiry}>
                  {'Оплатить до: ' + normalizeTime(session[0].booking_expiry!.toString())}
                </p>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default BookingCard;
