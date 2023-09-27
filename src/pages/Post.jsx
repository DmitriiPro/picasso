import { useNavigate, useParams } from 'react-router-dom'
import { useGetPostByIdQuery } from '../entities/getPosts.api'

export const Post = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data, error, isLoading } = useGetPostByIdQuery(id)

  return (
    <div className="postWrapper">
      {error ? (
        <h2 className="load">Error: {error.status}</h2>
      ) : isLoading ? (
        <h1 className="load">loading...</h1>
      ) : (
        <article className="article">
          <span>Номер: {id}</span>
          <h3>{data?.title}</h3>
          <div>{data.body}</div>
          <button className="link" onClick={() => navigate(-1)}>
            Назад
          </button>
        </article>
      )}
    </div>
  )
}
