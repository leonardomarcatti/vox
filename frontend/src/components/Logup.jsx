import { Link } from "react-router-dom"

const Logup = () => {
   return <div className="shadow-lg rounded-3 col-5 p-4 bg-body-tertiary">
      <h2 className='mb-3'>Cadastre-se</h2>
      <form action="" method="post">
         <div className="mb-3 text-start">
            <label htmlFor="userName" className="form-label">Nome de Usuário:</label>
            <input type="text" name="userName" id="userName" className="form-control" />
         </div>
         <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" name="email" id="email" className="form-control" />
         </div>
         <div className="mb-3  text-start">
            <label htmlFor="senha" className="form-label">Senha:</label>
            <input type="password" name="password" id="password" className="form-control" />
         </div>
         <div className="mb-3  text-start">
            <label htmlFor="password_confirm" className="form-label">Repita Senha:</label>
            <input type="email" name="password_confirm" id="password_confirm" className="form-control" />
         </div>
         <div className=''>
            <span>
               <button type="submit" className='btn btn-primary mx-2'>Cadastrar <i class="fa-solid fa-user-plus"></i></button>
               <button type="reset" className='btn btn-warning mx-2'>Limpar <i class="fa-solid fa-x"></i></button>
            </span>
            <small>Já é cadastrado? Clique <Link to='/'>aqui</Link></small>
         </div>
      </form>
   </div> 
}

export default Logup