import { Link } from 'react-router-dom'

export const PostItem = ({ post, index, style }) => {
  return (
    <li className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
      <>
        <span>№ {post.id}</span>
        <h3>{post.title}</h3>
        <p className="lineClamp">{post.body}</p>
        <Link className="link" to={`/post/${post.id}`}>
          Просмотр
        </Link>
      </>
    </li>
  )
}
