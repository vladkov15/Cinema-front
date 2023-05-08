import React, { ReactNode, useState } from 'react';
import styles from './BookingCard.module.scss';
import { Booking, Seat } from '@/models/models';
import { filmApi } from '@/services/FilmService';
import { sessionApi } from '@/services/SessionService';
import { normalizeDate, normalizeDate2, normalizeTime } from '../Card/Card';
import { templatePDF } from '../BookingCards/BookingsCards';

interface BookingProps {
  booking: Booking[];
  clb: () => void;
  pdfClb: (e: templatePDF) => void;
  children: ReactNode;
}

const BookingCard: React.FC<BookingProps> = ({ booking, clb, children, pdfClb }) => {
  const { data: film } = filmApi.useFetchFilmByIdQuery(booking[0].film_id!);
  const { data: session, isLoading } = sessionApi.useFetchBySessionsssQuery(booking[0].session_id!);

  let finalPrice: number = 0;
  for (let index = 0; index < booking.length; index++) {
    finalPrice += booking[index].price!;
  }

  let mass: Seat[] = [];
  for (let i = 0; i < booking.length; i++) {
    mass.push(booking[i].seat!);
  }
  let pdf: templatePDF;
  
  setTimeout(() => {
    if (session && session[0]) {
      pdf = {
        name: film![0]!.title!,
        date: normalizeDate2(session[0].date!.toString()),
        price: finalPrice.toString(),
        seats: mass,
        time: normalizeTime(session[0].start_time!.toString()),
      };
    }
  }, 2000);

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
            <h3 className={styles.title}>{film[0]!.title}</h3>
            <p>места:</p>
            {booking.map((item, index) => (
              <p key={index}>{'ряд: ' + item.seat?.row + ' место: ' + item.seat?.seat_number}</p>
            ))}
            {session && (
              <>
                <p className={styles.sessionTime}>
                  {'Дата: ' + normalizeDate(session[0]!.start_time!.toString())}
                </p>
                <p className={styles.sessionTime}>
                  {'Время начала: ' + normalizeTime(session[0]!.start_time!.toString())}
                </p>

                <button
                  onClick={() => {
                    clb();
                    pdfClb(pdf);
                  }}
                  className={styles.button}
                >
                  {'Оплатить: ' + finalPrice + ' руб'}
                </button>
                <p className={styles.bookingExpiry}>
                  {'Оплатить до: ' + normalizeTime(session[0].booking_expiry!.toString())}
                </p>
              </>
            )}
          </div>
        </>
      )}
      <div className={styles.card}>{children}</div>
    </div>
  );
};

export default BookingCard;
