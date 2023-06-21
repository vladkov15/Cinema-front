import { Film } from '@/models/models';
import styles from './MainSlide.module.scss';
import { FC } from 'react';
import { useRouter } from 'next/router';
interface SlideProps {
  film: Film;
}

const Slide: FC<SlideProps> = ({ film }) => {
    const router = useRouter()
  return (
    <>
      <div onClick={() => router.push(`afisha/${film.id}`)}
        style={{
          backgroundImage: `url(http://localhost:7000/images/${film.poster_url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          height: '80vh',
          width: '100%',
        }}
      >
        <div className={styles.slide}>
          <div className={styles.slide__details}>
            <h1 className={styles.slide__title}>{film.title}</h1>
            <p className={styles.slide__description}>{film.description}</p>
            <div className={styles.slide__rating}>
              {'рейтинг: '}
              <div className={styles.slide__rating__index}>{film.rating}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide;
