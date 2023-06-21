import { User } from '@/models/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
export interface LoginProps{
  email: string;
  password: string;
}
export const userApii = createApi({
  reducerPath: 'userApii',
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:7000` }),
  endpoints: (build) => ({
    fetchAllUsers: build.query<User[], string>({
      query: () => ({
        url: '/users',
      }),
    }),
    fetchOneUsers: build.query<User, string>({
      query: (email) => ({
        url: `/users/${email}`,
      }),
    }),
    fetchForLogin: build.mutation<User, User>({
      query: (user) => ({
        url: '/users',
        method: 'POST',
        body: user
      }),
    }),
    patchUser: build.mutation<User, User>({
      query: (user) => ({
        url: `/users/${user.email}`,
        method: 'PATCH',
        body: user,
      }),
    }),
  }),
});
