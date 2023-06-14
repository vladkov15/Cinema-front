import React from 'react';
import './InfoPage.css'; // импортируем файл со стилями
import DefaultLayout from '@/layouts/DefaultLayout';

interface InfoPageProps {}

const InfoPage: React.FC<InfoPageProps> = ({}) => {
  return (
    <DefaultLayout>
    <div className="container"> {/* добавляем класс "container" */}
      <h1>Данный прототип сайта для онлайн-бронирования билетов в кинотеатр является частью дипломного проекта Шведа Е. А.</h1>
      <p className="text">
        В случае возникновения вопросов, пишите нам{' '}
        <a href={'mailto:Egoryusss@gmail.com'} className="link">{'Egoryusss@gmail.com'}</a>. {/* добавляем класс "link" */}
      </p>
    </div>
    </DefaultLayout>
  );
};

export default InfoPage;