import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://jsonplaceholder.typicode.com/`,
  }),

  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: 'posts',
      }),
    }),

    getPostById: builder.query({
      query: (id) => ({
        url: `posts/${id}`,
      }),
    }),
  }),
})

export const { useGetPostsQuery, useGetPostByIdQuery } = postApi
