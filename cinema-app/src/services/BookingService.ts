
import { Booking } from '@/models/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
interface ApiHelper{
  id: number | string,
  session_id: number | string
}
export const bookingApi = createApi({
  reducerPath: 'bookingApi',
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:7000` }),
  endpoints: (build) => ({
    fetchAllBookings: build.query<Booking[], string>({
      query: () => ({
        url: '/bookings',
      }),
    }),
    fetchBookingsById: build.query<Booking[], number | string>({
      query: (id: number) => ({
        url: `/bookings/${id}`,
      }),
    }),
    fetchBookingsByUserId: build.query<Booking[], number | string>({
      query: (id: number) => ({
        url: `/bookings/user/${id}`,
      }),
    }),
    createBooking: build.mutation<Booking, Booking>({
      query: (booking) => ({
        url: '/bookings',
        method: 'POST',
        body: booking
      }),
    }),
    fetchByIdSessionsAndUserId: build.query<Booking[], ApiHelper >({
      query: (item : ApiHelper) => ({
        url: `/bookings`,
        params:{
            user_id: item.id,
            session_id: item.session_id
        }
      }),
    }),
  }),
});