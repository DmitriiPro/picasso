import { Outlet } from 'react-router-dom'

import { PostList } from '../features/PostList'
import { useGetPostsQuery } from '../entities/getPosts.api'

export const Layout = () => {
  const { data = {}, error, isLoading } = useGetPostsQuery()

  return (
    <>
      {error ? (
        <h2 className="load">Error: {error.status}</h2>
      ) : isLoading ? (
        <h1 className="load">loading...</h1>
      ) : (
        <PostList posts={data} />
      )}
      <Outlet />
    </>
  )
}
