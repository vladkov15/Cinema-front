import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

export const imageApi = createApi({
  reducerPath: 'imageApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000' }),
  endpoints: (builder) => ({
    sendImage: builder.mutation({
      query: (formData) => ({
        url: '/images',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});
