import React, { useState } from 'react';
import styles from './Session.module.scss';
import { Seat } from '@/models/models';
import ListOfSeats from './ListOfSeats/ListOfSeats';
import { bookingApi } from '@/services/BookingService';
import { seatApi } from '@/services/SeatService';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import { userApii } from '@/services/UserService';
import { sessionApi } from '@/services/SessionService';
import { set } from 'react-hook-form';

interface Props {}

const Session = () => {
  const router = useRouter();
  const { sessionId } = router.query;

  if (sessionId == undefined) {
    return null;
  }

  const { data: session } = useSession();

  const { data: user } = userApii.useFetchOneUsersQuery(session?.user?.email!);
  const { data: seatMass } = seatApi.useFetchSeatsByIdQuery(`${sessionId}`);
  const { data: sessionData } = sessionApi.useFetchBySessionsssQuery(Number(sessionId));

  const [seats, setSeats] = useState<Seat[]>();
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
  const [createBooking, {}] = bookingApi.useCreateBookingMutation();
  const [styleVarible, setStyleVarible] = useState(false);
  const [styleVaribleCheck, setStyleVaribleCheck] = useState(true);

  const [wait, setWait] = useState(false);

  let waitModule = (
    <div className={styles.Wait}>
      <h1>Подождите секунду...</h1>
    </div>
  );

  if (sessionData == undefined) {
    return null;
  }
  const initSeats = () => {
    // const newSeats: Seat[] = [];
    // for (let i = 1; i <= numRows; i++) {
    //   for (let j = 1; j <= seatsPerRow; j++) {
    //     newSeats.push({
    //       seat_id: `${i}-${j}`,
    //       row: i,
    //       seat_number: j,
    //       available: true,
    //       selected: false
    //     });
    //   }
    // }
    // console.log(seatMass);

    setSeats(seatMass);
    console.log(seatMass);

    setSelectedSeats([]);

    styleVaribleCheck ? setStyleVarible(!styleVarible) : '';
    setStyleVaribleCheck(false);
  };

  const toggleSeat = (row: number, seatNumber: number) => {
    let mass: Seat[] = [];
    mass = seats!.map((seat) =>
      seat.row === row && seat.seat_number === seatNumber
        ? { ...seat, selected: !seat.selected }
        : seat
    );
    setSelectedSeats(mass?.filter((seat) => seat.selected === true));
    setSeats(mass);
  };

  const getSeat = (row: number, seatNumber: number) =>
    seats?.find((seat) => seat.row === row && seat.seat_number === seatNumber);

  const renderSeats = () => {
    const rows = [];
    for (let i = 1; i <= 7; i++) {
      const rowSeats = [];
      for (let j = 1; j <= 20; j++) {
        const seat = getSeat(i, j);
        rowSeats.push(
          <div
            key={`${i}-${j}`}
            className={`${styles.seat} ${
              seat?.bookings![0]
                ? styles.booking
                : `${styles.seat} ${seat?.selected ? styles.selected : ''}`
            }`}
            onClick={() => (seat?.bookings![0] ? '' : toggleSeat(i, j))}
          >
            {j}
          </div>
        );
      }
      rows.push(
        <div key={i} className={styles.row}>
          {rowSeats}
        </div>
      );
    }
    return rows;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const selectedSeats = seats!.filter((seat) => seat.selected);
    console.log(selectedSeats);
    var today = moment().format('YYYY-MM-DD HH:mm:ss');
    var bookingExpiry = moment(today).add(5, 'minutes').format('YYYY-MM-DD HH:mm:ss');

    selectedSeats.map(
      async (seat) =>
        await createBooking({
          user_id: user?.id,
          film_id: seat.film_id,
          seat_id: seat.id,
          session_id: seat.session_id,
          pay: false,
          price: sessionData[0].price,
          created_at: new Date(today),
          booking_expiry: new Date(bookingExpiry),
        })
    );
    setTimeout(() => setWait(!wait))    
    setTimeout(() => router.push('/profile'), 6000);
  };

  return (
    <div>
      {wait == false?
      <div className={styles.session}>
        <h2>Выберите места</h2>
        <div className={styles.screen}>Экран</div>
        <form onSubmit={handleSubmit}>
          <div className={styleVarible ? styles.seatContainer : styles.seatContainerBlur}>
            {renderSeats()}
          </div>
          <button type="submit">Потвердить</button>
        </form>
        <button onClick={initSeats}>Начать выбор/очистить</button>
        {selectedSeats && <ListOfSeats seats={selectedSeats} />}
      </div>: waitModule}
    </div>
  );
};

export default Session;
