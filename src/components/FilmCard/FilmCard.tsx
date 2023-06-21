import { Film, Session } from '@/models/models';
import styles from './FilmCard.module.scss';
import { sessionApi } from '@/services/SessionService';
import { normalizeTime } from '../Card/Card';
import { useRouter } from 'next/router';
import { filmApi } from '@/services/FilmService';
import { FC, useState } from 'react';

interface FilmCardProps {
  id: string;
}

const FilmCard: FC<FilmCardProps> = ({ id }) => {
  const { data: film } = filmApi.useFetchFilmByIdQuery(id);

  const { data: session } = sessionApi.useFetchByIdSessionsQuery(id);
  const router = useRouter();
  return (
    <>
      {film && (
        <>
          <div className={styles.filmCard}>
            <img
              src={`http://localhost:7000/images/${film[0].poster_url}`}
              alt={film[0].title}
              className={styles.filmCard__poster}
            />
            <div className={styles.filmCard__info}>
              <h2 className={styles.filmCard__title}>{film[0].title}</h2>
              <p className={styles.filmCard__description}>{'Описание: ' +film[0].description}</p>
              <div className={styles.filmCard__rating}>{'Рейтинг: ' + film[0].rating}</div>
            </div>
          </div>
          <div className={styles.times}>
            <h1>Сеансы:</h1>
            {session &&
              session.map((time, index) => (
                <button key={index} className={styles.times__time} onClick={(()=> router.push(`/session/${time.id}`))}>
                  {time.start_time && normalizeTime(time.start_time.toString())}
                </button>
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default FilmCard;
