import { Route, Routes } from 'react-router-dom'
import { Layout } from './Layout'
import { Post } from './Post'
import { NoPage } from './NoPage'

import { Navigate } from 'react-router-dom'

export const Router = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Layout />} />
        <Route path="post/:id" element={<Post />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  )
}
