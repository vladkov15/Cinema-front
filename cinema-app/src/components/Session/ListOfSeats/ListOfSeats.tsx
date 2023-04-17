import { Seat } from '@/types/type';
import { FC } from 'react';
import styles from './ListOfSeats.module.scss';

interface ListOfSetsProps {
  seats: Seat[];
}

const ListOfSeats: FC<ListOfSetsProps> = ({ seats }) => {
  

  return (
    <div className={styles['list-of-seats']}>
      <h3>Selected Seats:</h3>
      <ul>
        {seats.map((seat) => (
          <li key={`${seat.row}-${seat.seatNumber}`}>
            Row {seat.row}, Seat {seat.seatNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfSeats;
