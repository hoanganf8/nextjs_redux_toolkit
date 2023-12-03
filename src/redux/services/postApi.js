import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `/posts`,
      providesTags: (result) => {
        const data = [
          ...result.map(({ id }) => ({ type: "Posts", id })),
          { type: "Posts", id: "LIST" },
        ];
        return data;
      },
    }),
    addPost: builder.mutation({
      query: (data) => {
        return {
          url: `/posts`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: [{ type: "Posts", id: "LIST" }],
    }),
  }),
});
