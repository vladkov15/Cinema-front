import { Film } from '@/models/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const filmApi = createApi({
  reducerPath: 'filmApi',
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:7000` }),
  endpoints: (build) => ({
    fetchAllFilms: build.query<Film[], string>({
      query: () => ({
        url: '/films',
      }),
    }),
    fetchFilmById: build.query<Film[], number | string>({
      query: (id: number) => ({
        url: `/films/${id}`,
      }),
    }),
  }),
});
