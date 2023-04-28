import { FC } from "react";
import BookingCard from "../BookingCard/BookingCard"
import { bookingApi } from "@/services/BookingService";
import styles from './BokkingsCards.module.scss';
interface BookingCardsProps{
    user: number;
}

const BookingCards:FC<BookingCardsProps> = ({user}) =>{
    const {data: booking} = bookingApi.useFetchBookingsByUserIdQuery(user)
    return(
        <div>
            <h1>Забронированые билеты:</h1>
            <div className={styles.bookingCards}>
            {booking && booking.map((item) =>
            <BookingCard booking={item} /> 
            )}
            </div>
        </div>
    )
}

export default BookingCards