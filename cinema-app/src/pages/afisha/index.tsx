import Cards from '@/components/Cards/Cards';
import DateTimePicker from '@/components/DateTimePicker/DateTimePicker';
import DefaultLayout from '@/layouts/DefaultLayout';
import { CardProps } from '@/models/models';
import { filmApi } from '@/services/FilmService';



const AfishaPage = () => {
  const { data: film } = filmApi.useFetchAllFilmsQuery('');
  return (
    <DefaultLayout>
      <DateTimePicker />
      {film && <Cards data={film} />}
    </DefaultLayout>
  );
};

export default AfishaPage;
