import Cards from '@/components/Cards/Cards';
import DateTimePicker from '@/components/DateTimePicker/DateTimePicker';
import DefaultLayout from '@/layouts/DefaultLayout';
import { CardProps, Session } from '@/models/models';
import { filmApi } from '@/services/FilmService';
import { sessionApi } from '@/services/SessionService';
import { useRouter } from 'next/router';
import { useState } from 'react';



const AfishaPage = () => {
  const router = useRouter()
  const [time, setTime] = useState<Date>(new Date())
  const {data : sessions} = sessionApi.useGetSessionByDateQuery(time.toISOString())
  
  if(sessions === undefined){
    return null
  }
  let filteSessions: Session[] = []; 
  for (let i = 1; i <= sessions?.length!; i++) {
    if(sessions[i]?.id! === sessions[i-1]?.id!) {
      
    }else{
      filteSessions.push()
    }
    
  }
 
  return(
    <DefaultLayout>
      <DateTimePicker date={(e) => {
        setTime(e)
      } } />
      {sessions && sessions.map((item) => <Cards key={item.id} data={item.film!} date={time} />)}
    </DefaultLayout>
  );
};

export default AfishaPage;
