import { bookingApi } from '@/services/BookingService';
import { filmApi } from '@/services/FilmService';
import { seatApi } from '@/services/SeatService';
import { sessionApi } from '@/services/SessionService';
import { ticketApi } from '@/services/TicketService';
import { userApii } from '@/services/UserService';

export default function HomePageComponent() {
  const { data: user } = userApii.useFetchAllUsersQuery('');
  const { data: booking } = bookingApi.useFetchAllBookingsQuery('');
  const { data: film } = filmApi.useFetchAllFilmsQuery('');
  const { data: seat } = seatApi.useFetchAllSeatsQuery('');
  const { data: session } = sessionApi.useFetchAllSessionsQuery('');
  const { data: ticket } = ticketApi.useFetchAllTiketsQuery('');
  return <>
  {user?.map((item) => item.email)}
  {booking?.map((item) => item.created_at)}
  {film?.map((item) => item.title)}
  {seat?.map((item) => item.available)}
  {session?.map((item) => item.start_time)}
  {ticket?.map((item) => item.id)}
  </>;
}
