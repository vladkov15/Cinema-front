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
    fetchForLogin: build.mutation<User[], LoginProps>({
      query: (loginProps) => ({
        url: 'user/auth',
        method: 'POST',
        body: {
          email: loginProps.email,
          password: loginProps.password,
        },
        
      }),
    }),
  }),
});
