import FilmCard from '@/components/FilmCard/FilmCard';
import Session from '@/components/Session/Session';
import { Film } from '@/models/models';
import { useRouter } from 'next/router';
import { FC } from 'react';
interface AfishaIdProps{
  
}
const AfishaId:FC<AfishaIdProps> = () => {
  const router = useRouter();
  const { afishaId  } = router.query
  
  

  return (<div>
     <FilmCard id={`${afishaId}`} />
    
  </div>)
};

export default AfishaId;
