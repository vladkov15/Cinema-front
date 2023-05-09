import React, { useState } from 'react';
import Modal from './Modal';
import { CreateSeat, Film, Seat } from '@/models/models';
import styles from './AdminFilmCard.module.scss';
import { sessionApi } from '@/services/SessionService';
import { seatApi } from '@/services/SeatService';
import { useForm } from 'react-hook-form';
import { filmApi } from '@/services/FilmService';

interface AdminFilmCardProps {
  data: Film;
}

type FormData = {
  sessionDate: string;
  startTime: string;
  endTime: string;
  bookingExpiry: string;
  price: number;
};
const sendSeat = async (seat: CreateSeat) => {
  fetch('http://localhost:7000/seats', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(seat),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};
const AdminFilmCard: React.FC<AdminFilmCardProps> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [createSession, {}] = sessionApi.useCreateSessionMutation();
  const [createSeats, {}] = seatApi.useCreateSeatMutation();
  const { register, handleSubmit } = useForm<FormData>();
  const [deleteFilm, setDeleteFilm] = useState(-1)
  const { data: film } = filmApi.useDeleteFilmQuery(deleteFilm);
 
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (id: number) => {
    setDeleteFilm(id)
  };
  const onSubmit = async (formData: FormData) => {
    let id;
    const session = await createSession({
      film_id: data.id,
      date: new Date(formData.sessionDate),
      start_time: new Date(formData.startTime),
      end_time: new Date(formData.endTime),
      booking_expiry: new Date(formData.bookingExpiry),
      price: formData.price,
    })
      .unwrap()
      .then(async (payload) => {
        id = payload.id;
      });

    for (let i = 1; i <= 7; i++) {
      for (let j = 1; j <= 20; j++) {
        const seat = {
          session_id: id,
          film_id: data.id,
          seat_id: `${i}-${j}`,
          row: i,
          seat_number: j,
          avaible: true,
        };
        sendSeat(seat);
      }
    }
  };

  return (
    <div className={styles.admin_film_card}>
      <img src={`http://localhost:7000/images/${data.poster_url}`} alt={data.title} />
      <h2>Название: {data.title}</h2>
      <p>Описание: {data.description}</p>
      <p>Рейтинг: {data.rating}</p>
      {!isModalOpen && (
        <>
          <button onClick={handleModalOpen}>Добавить сеанс</button>
          <div>{'-------------------------'}</div>
          <button onClick={() => handleDelete(data.id!)}>Удалить фильм</button>
        </>
      )}
      {isModalOpen && (
        <Modal onClose={handleModalClose}>
          <div className={styles.admin_film_card__form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>
                Дата сеанса:
                <input type="date" {...register('sessionDate')} />
              </label>
              <label>
                Время начала:
                <input type="datetime-local" {...register('startTime')} />
              </label>
              <label>
                Время окончания:
                <input type="datetime-local" {...register('endTime')} />
              </label>
              <label>
                Окончание бронирования:
                <input type="datetime-local" {...register('bookingExpiry')} />
              </label>
              <label>
                Цена:
                <input type="number" {...register('price')} />
              </label>
              <button type="submit">Потвердить</button>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AdminFilmCard;
