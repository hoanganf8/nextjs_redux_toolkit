import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `/posts`,
    }),
    addPost: builder.mutation({
      query: (data) => {
        return {
          url: `/posts`,
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});
