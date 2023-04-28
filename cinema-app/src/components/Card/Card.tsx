import React from 'react';
import Image from 'next/image';
import styles from './Card.module.scss';
import { Film } from '@/models/models';
import { sessionApi } from '@/services/SessionService';
import { useRouter } from 'next/router';

interface CardProps {
  data: Film;
}
 export function normalizeTime(date: string) {
  return date.match(/(?<=T)\d{2}:\d{2}/);
}
const Card: React.FC<CardProps> = ({ data }) => {
  const { data: session } = sessionApi.useFetchByIdSessionsQuery(data.id!);
  const router = useRouter();

  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <Image
          src={`http://localhost:7000/images/${data.poster_url}`}
          alt={data.title!}
          width={250}
          height={300}
        />
      </div>
      <div className={styles.card__content}>
        <h2 className={styles.card__title} onClick={() => router.push(`/afisha/${data.id}`)}>
          {data.title}
        </h2>
        <p className={styles.card__subtitle}>{data.description}</p>
        <p className={styles.card_rating}>{data.rating}</p>
        <div className={styles.card__buttons}>
          {session &&
            session.map((button) => (
              <button key={button.id} className={styles.card__button} onClick={() => router.push(`session/${button.id}`)}>
                {button.start_time && normalizeTime(button.start_time.toString())}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
