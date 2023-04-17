import React, { useState } from 'react';
import styles from './Session.module.scss';
import { Seat } from '@/types/type';
import ListOfSeats from './ListOfSeats/ListOfSeats';


interface Props {
  numRows: number;
  seatsPerRow: number;
}

const Session = ({ numRows, seatsPerRow }: Props) => {
  const [seats, setSeats] = useState<Seat[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);

  const initSeats = () => {
    const newSeats: Seat[] = [];
    for (let i = 1; i <= numRows; i++) {
      for (let j = 1; j <= seatsPerRow; j++) {
        newSeats.push({
          row: i,
          seatNumber: j,
          selected: false,
        });
      }
    }
    setSeats(newSeats);
    setSelectedSeats([])
  };

  
  const toggleSeat = (row: number, seatNumber: number) => {
    let mass:Seat[] = []
    mass = seats.map((seat) =>
    seat.row === row && seat.seatNumber === seatNumber
      ? { ...seat, selected: !seat.selected }
      : seat
  )
    setSelectedSeats(mass.filter( seat => seat.selected === true))
    setSeats(mass)
  };

  const getSeat = (row: number, seatNumber: number) =>
    seats.find((seat) => seat.row === row && seat.seatNumber === seatNumber);

  const renderSeats = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      const numSeats = seatsPerRow + i;
      const rowSeats = [];
      for (let j = 1; j <= numSeats; j++) {
        const seat = getSeat(i + 1 , j);
        rowSeats.push(
          <div
            key={`${i + 1}-${j}`}
            className={`${styles.seat} ${seat?.selected ? styles.selected : ''}`}
            onClick={() => toggleSeat(i + 1 , j )}
            
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
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const selectedSeats = seats.filter((seat) => seat.selected);
    setSelectedSeats(selectedSeats);
  };

  return (
    <div className={styles.session}>
      <h2>Select your seats</h2>
      <div className={styles.screen}>Screen</div>
      <form onSubmit={handleSubmit}>
        <div className={styles.seatContainer}>{renderSeats()}</div>
        <button type="submit">Submit</button>
      </form>
      <button onClick={initSeats}>Начать выбор/очистить</button>
      {selectedSeats && <ListOfSeats seats={selectedSeats} />}
    </div>
  );
};

export default Session;