import { Session } from '@/models/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const sessionApi = createApi({
  reducerPath: 'sessionApi',
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:7000` }),
  endpoints: (build) => ({
    fetchAllSessions: build.query<Session[], string>({
      query: () => ({
        url: '/sessions',
      }),
    }),
    fetchByIdSessions: build.query<Session[], number | string>({
      query: (id: number) => ({
        url: `/sessions`,
        params:{
            film_id: id
        }
      }),
    }),
  }),
});
