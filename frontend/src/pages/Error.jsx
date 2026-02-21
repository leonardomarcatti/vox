import { Link } from "react-router-dom"
const Error = () => {
   return <div className="d-flex flex-column">
      <h1>Página Inexistente</h1>
      <p>Clique <Link to='/logout'>aqui</Link> para voltar</p>
   </div>
}

export default Error