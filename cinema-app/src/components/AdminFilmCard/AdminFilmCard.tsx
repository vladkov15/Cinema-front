import React from 'react';
import Modal from './Modal';
import { CreateSeat, Film, Seat } from '@/models/models';
import styles from './AdminFilmCard.module.scss';
import { sessionApi } from '@/services/SessionService';
import { seatApi } from '@/services/SeatService';
import { useForm } from 'react-hook-form';

interface AdminFilmCardProps {
  data: Film;
}

type FormData = {
  sessionDate: string;
  startTime: string;
  endTime: string;
  bookingExpiry: string;
};
const sendSeat = async (seat: CreateSeat) => {
   
      
      fetch('http://localhost:7000/seats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(seat)
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
};
const AdminFilmCard: React.FC<AdminFilmCardProps> = ({ data }) => {
   
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [createSession, {}] = sessionApi.useCreateSessionMutation();
  const [createSeats, {}] = seatApi.useCreateSeatMutation();
  const { register, handleSubmit } = useForm<FormData>();

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (formData: FormData) => {
    let id;
    const session = await createSession({
      film_id: data.id,
      date: new Date(formData.sessionDate),
      start_time: new Date(formData.startTime),
      end_time: new Date(formData.endTime),
      booking_expiry: new Date(formData.bookingExpiry),
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
            sendSeat(seat)
        }
        
      }
  };

  return (
    <div className={styles.admin_film_card}>
      <img src={`http://localhost:7000/images/${data.poster_url}`} alt={data.title} />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <p>Rating: {data.rating}</p>
      {!isModalOpen && <button onClick={handleModalOpen}>Add Session</button>}
      {isModalOpen && (
        <Modal onClose={handleModalClose}>
          <div className={styles.admin_film_card__form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>
                Session Date:
                <input type="date" {...register('sessionDate')} />
              </label>
              <label>
                Start Time:
                <input type="datetime-local" {...register('startTime')} />
              </label>
              <label>
                End Time:
                <input type="datetime-local" {...register('endTime')} />
              </label>
              <label>
                Booking Expiry:
                <input type="datetime-local" {...register('bookingExpiry')} />
              </label>
              <button type="submit">Add Session</button>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AdminFilmCard;