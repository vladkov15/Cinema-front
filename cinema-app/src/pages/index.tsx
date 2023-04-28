import { setupStore } from '@/app/store';
import HomePageComponent from '@/components/Example';
import MainSlider from '@/components/MainSlider/MainSlider';
import DefaultLayout from '@/layouts/DefaultLayout';

import { Provider } from 'react-redux';
const slides = [
  'https://via.placeholder.com/800x400/FF0000/FFFFFF',
  'https://via.placeholder.com/800x400/00FF00/FFFFFF',
  'https://via.placeholder.com/800x400/0000FF/FFFFFF',
];



export default function Home() {
  return (
      <DefaultLayout>
        <MainSlider slides={slides} />
      </DefaultLayout>
  );
}
