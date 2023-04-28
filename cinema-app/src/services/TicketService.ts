
import { Ticket } from '@/models/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const ticketApi = createApi({
  reducerPath: 'ticketApi',
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:7000` }),
  endpoints: (build) => ({
    fetchAllTikets: build.query<Ticket[], string>({
      query: () => ({
        url: '/tickets',
      }),
    }),
    createTicket: build.mutation<Ticket, Ticket>({
      query: (ticket) => ({
        url: '/tickets',
        method: 'POST',
        body: ticket
      }),
    })
  }),
});