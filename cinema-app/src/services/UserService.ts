import { User } from '@/models/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const userApii = createApi({
  reducerPath: 'userApii',
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:7000` }),
  endpoints: (build) => ({
    fetchAllUsers: build.query<User[], string>({
      query: () => ({
        url: '/users',
      }),
    }),
  }),
});
