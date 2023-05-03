import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.scss';
import { CardProps, Film } from '@/models/models';

interface CardsProps {
  data: Film,
  date: Date
}

const Cards: React.FC<CardsProps> = ({ data, date }) => {
  return (
    <div className={styles.cards}>
      <Card key={data.id} data={data} />
    </div>
  );
};

export default Cards;
