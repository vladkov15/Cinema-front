import React from 'react';
import Image from 'next/image';
import styles from './Card.module.scss';
import { Film } from '@/models/models';
import { sessionApi } from '@/services/SessionService';
import { useRouter } from 'next/router';

interface CardProps {
  data: Film,
  
}
 export function normalizeTime(date: string) {
  return `${date.match(/(?<=T)\d{2}:\d{2}/)}`;
}

export function normalizeDate(date: string){
  const regex = /^(\d{4})-(\d{2})-(\d{2})/;
  
  const match = date.match(regex);
  const year = match![1];
  const month = new Date(Date.parse(date)).toLocaleString('ru', { month: 'long' });
  const day = match![3];
  
   return `${day} ${month} ${year}`;

}
export function normalizeDate2(date: string){
  const regex = /\d{4}-\d{2}-\d{2}/;
  const found = date.match(regex);
  if(found){
     const [year, month, day] = found[0].split('-');
     return `${day}-${month}-${year}`;
  }
  return '';
} 
const Card: React.FC<CardProps> = ({ data }) => {
  const { data: session } = sessionApi.useFetchByIdSessionsQuery(data.id!);
  const router = useRouter();
  
   if(session === undefined){}else  console.log(session[0].start_time!)
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
              <><button key={button.id} className={styles.card__button} onClick={() => router.push(`session/${button.id}`)}>
                {button.start_time && normalizeTime(button.start_time.toString())}
              </button><p className={styles.card__price}>{'Цена: '+ button.price+ 'руб'}</p></>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
