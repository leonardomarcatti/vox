import { Link, Form, useActionData } from "react-router-dom"

const login = () => {
   const data = useActionData()
   console.log(data);
   
   return <div className="shadow-lg rounded-3 col-5 p-4 bg-body-tertiary">
      <h2 className='mb-3'>Login</h2>
      <Form method="POST">
         <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" name="email" id="email" className="form-control" />
         </div>
         <div className="mb-3  text-start">
            <label htmlFor="password" className="form-label">Senha:</label>
            <input type="password" name="password" id="password" className="form-control" />
         </div>
         <div>
            <span>
               <button type="submit" className='btn btn-primary mx-2'>Login <i className="fa-solid fa-lock-open"></i></button>
               <button type="reset" className='btn btn-warning mx-2'>Limpar <i className="fa-solid fa-x"></i></button>
            </span>
            <small>Não tem cadastro? Clique <Link to='/logup'>aqui</Link></small>
            <Link to='/home'>Home</Link>
            
         </div>
      </Form>
   </div>
}

export default login