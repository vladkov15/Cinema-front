
import { CreateSeat, Seat } from '@/models/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const seatApi = createApi({
  reducerPath: 'seatApi',
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:7000` }),
  endpoints: (build) => ({
    fetchAllSeats: build.query<Seat[], string>({
      query: () => ({
        url: '/seats',
      }),
    }),
    createSeat: build.mutation<Seat, Seat>({
      query: (seat) => ({
        url: '/seats',
        method: 'POST',
        data: seat,
      }),
    }),
    fetchSeatsById: build.query<Seat[], number | string>({
      query: (id: number) => ({
        url: `/seats/${id}`,
      }),
    }),
  }),
});