import { Link } from 'react-router-dom'

export const NoPage = () => {
  return (
    <div className="nopage">
      <h1>Страницы не существует</h1>
      <Link className="link" to="/">
        Вернуться на главную страницу
      </Link>
    </div>
  )
}
