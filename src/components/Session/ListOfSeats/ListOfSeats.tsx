import { Seat } from '@/models/models';
import { FC } from 'react';
import styles from './ListOfSeats.module.scss';

interface ListOfSetsProps {
  seats: Seat[];
}

const ListOfSeats: FC<ListOfSetsProps> = ({ seats }) => {
  

  return (
    <div className={styles['list-of-seats']}>
      <h3>Выбранные места:</h3>
      <ul>
        {seats.map((seat) => (
          <li key={`${seat.row}-${seat.seat_number}`}>
            Ряд: {seat.row}, Место: {seat.seat_number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfSeats;
