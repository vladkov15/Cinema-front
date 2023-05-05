import FilmCard from '@/components/FilmCard/FilmCard';
import Session from '@/components/Session/Session';
import DefaultLayout from '@/layouts/DefaultLayout';
import { Film } from '@/models/models';
import { useRouter } from 'next/router';
import { FC } from 'react';
interface AfishaIdProps{
  
}
const AfishaId:FC<AfishaIdProps> = () => {
  const router = useRouter();
  const { afishaId  } = router.query
  
  

  return (<div>
    <DefaultLayout>
     <FilmCard id={`${afishaId}`} />
     </DefaultLayout>
  </div>)
};

export default AfishaId;
