import Cards from '@/components/Cards/Cards';
import DateTimePicker from '@/components/DateTimePicker/DateTimePicker';
import DefaultLayout from '@/layouts/DefaultLayout';
import { CardProps } from '@/types/type';

const data: CardProps[] = [
  {
    imageUrl:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/82af3f64-2908-4684-be9e-f60eaff3281d/1920x',
    title: 'очко дракона',
    subtitle:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    buttons: ['14:10', '16:10', '16:30', '20:00'],
  },
  {
    imageUrl:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/82af3f64-2908-4684-be9e-f60eaff3281d/1920x',
    title: 'очко дракона',
    subtitle:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    buttons: ['14:10', '16:10', '16:30', '20:00'],
  },
  {
    imageUrl:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/82af3f64-2908-4684-be9e-f60eaff3281d/1920x',
    title: 'очко дракона',
    subtitle:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    buttons: ['14:10', '16:10', '16:30', '20:00'],
  },
  {
    imageUrl:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/82af3f64-2908-4684-be9e-f60eaff3281d/1920x',
    title: 'очко дракона',
    subtitle:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    buttons: ['14:10', '16:10', '16:30', '20:00'],
  },
  {
    imageUrl:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/82af3f64-2908-4684-be9e-f60eaff3281d/1920x',
    title: 'очко дракона',
    subtitle:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    buttons: ['14:10', '16:10', '16:30', '20:00'],
  },
  {
    imageUrl:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/82af3f64-2908-4684-be9e-f60eaff3281d/1920x',
    title: 'очко дракона',
    subtitle:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    buttons: ['14:10', '16:10', '16:30', '20:00'],
  },
  {
    imageUrl:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/82af3f64-2908-4684-be9e-f60eaff3281d/1920x',
    title: 'очко дракона',
    subtitle:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    buttons: ['14:10', '16:10', '16:30', '20:00'],
  },
  {
    imageUrl:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/82af3f64-2908-4684-be9e-f60eaff3281d/1920x',
    title: 'очко дракона',
    subtitle:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    buttons: ['14:10', '16:10', '16:30', '20:00'],
  },
  
];

const AfishaPage = () => {
  return (
    <DefaultLayout >
      <DateTimePicker />
      <Cards data={data} />
    </DefaultLayout>
  );
};

export default AfishaPage;
