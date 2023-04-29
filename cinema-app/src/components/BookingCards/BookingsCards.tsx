import { FC, useState } from 'react';
import BookingCard from '../BookingCard/BookingCard';
import { bookingApi } from '@/services/BookingService';
import styles from './BokkingsCards.module.scss';

interface BookingCardsProps {
  user: number;
}

const BookingCards: FC<BookingCardsProps> = ({ user }) => {
  const { data: booking } = bookingApi.useFetchBookingsByUserIdQuery(user);
  
  if (!booking) {
    return null; // or render a loading spinner
  }

  // Group bookings by session_id
  const bookingsBySessionId: { [key: number]: Array<any> } = {};
  booking.forEach((booking) => {
    if (booking.session_id !== undefined && bookingsBySessionId[booking.session_id]) {
      bookingsBySessionId[booking.session_id].push(booking);
    } else {
      bookingsBySessionId[booking.session_id!] = [booking];
    }
  });

  // Render each group of bookings using a separate component
  return (
    <div>
      <h1>Забронированные билеты:</h1>
      <div className={styles.bookingCards}>
        {Object.values(bookingsBySessionId).map((bookings) => (
          <div>
            {/* <h3>Session {bookings[0].session_id}</h3> display session_id */}
              <BookingCard booking={bookings} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingCards;
