import React from 'react';
import Image from 'next/image';
import styles from './Card.module.scss';
import { CardProps } from '@/types/type';


const Card: React.FC<CardProps> = ({ imageUrl, title, subtitle, buttons }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <Image src={imageUrl} alt={title} width={300} height={200} />
      </div>
      <div className={styles.card__content}>
        <h2 className={styles.card__title}>{title}</h2>
        <p className={styles.card__subtitle}>{subtitle}</p>
        <div className={styles.card__buttons}>
          {buttons.map((button) => (
            <button key={button} className={styles.card__button}>
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
