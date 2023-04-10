import React, { useState } from 'react';
import styles from './Session.module.scss';

type Seat = {
  id: string;
  row: number;
  seat: number;
  selected: boolean;
};

type Props = {
  rows: number;
  seatsPerRow: number;
};

function generateSeats(rows: number, seatsPerRow: number) {
  const seats = [];

  for (let i = 0; i < rows; i++) {
    const rowIndex = i + 1;
    const seatsForRow = seatsPerRow + 2 * i;

    for (let j = 0; j < seatsForRow; j++) {
      const seatIndex = j + 1;
      seats.push({
        id: `${rowIndex}-${seatIndex}`,
        row: rowIndex,
        seat: seatIndex,
        selected: false,
      });
    }
  }

  return seats;
}

function Session({ rows, seatsPerRow }: Props) {
  const [seats, setSeats] = useState<Seat[]>(generateSeats(rows, seatsPerRow));
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);

  function handleSeatClick(seat: Seat) {
    const updatedSeats = seats.map((s) => {
      if (s.id === seat.id) {
        return { ...s, selected: !s.selected };
      } else {
        return s;
      }
    });

    setSeats(updatedSeats);

    if (seat.selected) {
      setSelectedSeats(selectedSeats.filter((s) => s.id !== seat.id));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  }
  

  return (
    <div className={styles.session}>
      <div className={styles.session__screen}></div>
      <div className={styles.session__seats}>
        {seats.map((seat) => (
          <div
            key={seat.id}
            className={`${styles.session__seat} ${seat.selected ? styles.selected : ''}`}
            onClick={() => handleSeatClick(seat)}
          ></div>
        ))}
        {Array.from({ length: rows }, (_, i) => i + 1).map((rowIndex) => (
          <div key={rowIndex} className={styles.session__row} style={{ '--row-index': rowIndex }}>
            <div className={styles.session__rowNumber}>Row {rowIndex}</div>
            {seats
              .filter((seat) => seat.row === rowIndex)
              .map((seat) => (
                <div
                  key={seat.id}
                  className={`${styles.session__seat} ${seat.selected ? styles.selected : ''}`}
                  onClick={() => handleSeatClick(seat)}
                ></div>
              ))}
          </div>
        ))}
      </div>
      <div className={styles.session__selectedSeats}>
        <div className={styles.session__selectedSeatsLabel}>Selected Seats:</div>
        {selectedSeats.map((seat) => (
          <div key={seat.id} className={styles.session__selectedSeat}>
            <div className={styles.session__selectedSeatNumber}>{seat.id}</div>
            <div className={styles.session__selectedSeatLabel}>Row {seat.row}, Seat {seat.seat}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Session;