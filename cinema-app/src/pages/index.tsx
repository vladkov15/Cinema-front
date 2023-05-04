import { setupStore } from '@/app/store';
import HomePageComponent from '@/components/Example';
import MainSlider from '@/components/MainSlider/MainSlider';
;
import DefaultLayout from '@/layouts/DefaultLayout';
import { filmApi } from '@/services/FilmService';

import { Provider } from 'react-redux';

export default function Home() {
  const { data: films } = filmApi.useFetchAllFilmsQuery('');
  console.log(films);
  
  return <DefaultLayout>{films && <MainSlider films={films} />}</DefaultLayout>;
}
