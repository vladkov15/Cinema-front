import Cards from '@/components/Cards/Cards';
import DateTimePicker from '@/components/DateTimePicker/DateTimePicker';
import DefaultLayout from '@/layouts/DefaultLayout';
import { CardProps, Session } from '@/models/models';
import { filmApi } from '@/services/FilmService';
import { sessionApi } from '@/services/SessionService';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './afisha.module.scss'



const AfishaPage = () => {
  const router = useRouter()
  const [time, setTime] = useState<Date>(new Date())
  const {data : sessions} = sessionApi.useGetSessionByDateQuery(time.toISOString())
  
  if(sessions === undefined){
    return null
  }

  const uniqueSessions = sessions.reduce((acc: Session[], session: Session) => {
    const index = acc.findIndex((s) => s.film_id === session.film_id);
    if (index === -1) {
      acc.push(session);
    } else {
      acc[index] = { ...acc[index], ...session };
    }
    return acc;
  }, []);
  
 
  return(
    <DefaultLayout>
      <div className={styles.afisha}>
      <DateTimePicker date={(e) => {
        setTime(e)
      } } />
      {uniqueSessions && uniqueSessions.map((item) => <Cards key={item.id} data={item.film!} date={time} />)}
      </div>
    </DefaultLayout>
  );
};

export default AfishaPage;
