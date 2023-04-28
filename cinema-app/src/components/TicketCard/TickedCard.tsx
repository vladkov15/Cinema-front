import React from 'react';
import styles from './TickedCard.module.scss';

interface TicketProps {
  moviePicture: string;
  title: string;
  sessionTime: string;
  place: string;
}

const TickedCard: React.FC<TicketProps> = ({ moviePicture, title, sessionTime, place }) => {
  return (
    <div className={styles.ticketCard}>
      <img src={moviePicture} alt="Movie Poster" className={styles.moviePicture} />
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.sessionTime}>{sessionTime}</p>
        <p className={styles.place}>{place}</p>
      </div>
    </div>
  );
};

export default TickedCard;