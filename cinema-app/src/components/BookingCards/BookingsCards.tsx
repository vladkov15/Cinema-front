import React, { FC, ReactNode, useState } from 'react';
import BookingCard from '../BookingCard/BookingCard';
import { bookingApi } from '@/services/BookingService';
import styles from './BokkingsCards.module.scss';
import CardInput from '../CardInput/CardInput';
import jsPDF  from 'jspdf';
import { Seat, Ticket } from '@/models/models';
import autoTable from 'jspdf-autotable';


interface BookingCardsProps {
  user: number;
}

export interface templatePDF {
  name: string;
  seats: Seat[];
  date: string;
  time: string;
  price: string;
}



const BookingCards: FC<BookingCardsProps> = ({ user }) => {
  const { data: booking, isLoading } = bookingApi.useFetchBookingsByUserIdQuery(user);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingsData, setBookingData] = useState();
  const [dataPDF, setDataPDF] = useState<templatePDF>();

  const handleModalOpen = (bookings: any) => {
    setIsModalOpen(true);
    setBookingData(bookings);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  if (!booking) {
    return null; // or render a loading spinner
  }

  if (isLoading) {
    return <div>Загрузка...</div>; // or render a loading spinner
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
  const handleDownloadPDF = (e: templatePDF) => {
  
    const doc = new jsPDF();

    
    // Add table to the PDF
    const tableColumn = ['Ryad', 'Mesto'];
    const tableRows: any = [];
    
    e.seats.forEach((seat) => {
      const seatData = [
        seat.row,
        seat.seat_number,
      ];
      tableRows.push(seatData);
    });
    
    autoTable(doc,{
      head: [tableColumn],
      body: tableRows,
    });
    const rows = e.seats.length * 10
  
    if(e.name){
      // doc.text(`Nazvanie filma: ${e.name}`, 10, 20+ rows);
    }
    doc.text(`Data filma: ${e.date.trim()}`, 10, 30+rows);
    doc.text(`Vremya nachala filma: ${e.time}`, 10, 40+rows);
    doc.text(`Tsena: ${e.price}rub`, 10, 50+rows);
    
    
    doc.save('movie-ticket.pdf');
} 

  

  return (
    <div className={styles.container}>
      {booking.length == 0 ? (
        <div className={styles.h1Change}>
          <h1>Забронированные билеты отсутствуют</h1>
        </div>
      ) : (
        <div>
          <div className={styles.h1Change}>
            <h1>Забронированные билеты:</h1>
          </div>
          <div className={styles.bookingCards}>
            {Object.values(bookingsBySessionId).map((bookings, index) => (
              <div key={index}>
                <BookingCard
                  key={index}
                  booking={bookings}
                  clb={() => {
                    handleModalOpen(bookings);
                  }}
                  pdfClb={(e) => {
                    setDataPDF(e);
                  }}
                >
                  {}
                </BookingCard>
              </div>
            ))}
          </div>
        </div>
      )}
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button className={styles.close} onClick={handleModalClose}>
              X
            </button>
            <BookingCard
              booking={bookingsData!}
              clb={() => {
                handleModalClose;
              }}
              pdfClb={(e) => {}}
            >
              <CardInput label={'Оплата билетов'} />
              <button className={styles.pdf} onClick={() => handleDownloadPDF(dataPDF!)}>
                Скачать в PDF
              </button>
            </BookingCard>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCards;
