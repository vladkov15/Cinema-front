import { bookingApi } from '@/services/BookingService';
import { filmApi } from '@/services/FilmService';
import { userApii } from '@/services/UserService';
import { useSession } from 'next-auth/react';
import { FC } from 'react';
interface PayFilmCardProps {
  film_id: number;
}

const PayFilmCard: FC<PayFilmCardProps> = ({ film_id }) => {
  // const { data: session } = useSession();
  // const {data: user} = userApii.useFetchOneUsersQuery(session?.user?.email!)
  //   const { data: booking } = bookingApi.useFetchBookingsByUserIdQuery(user?.id!);
  // const { data: film } = filmApi.useFetchFilmByIdQuery();
  return (
    <>
      
    </>
  );
};

export default PayFilmCard;
