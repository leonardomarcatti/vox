import { Link, Form, useActionData } from "react-router-dom"

const Logup = () => {
   const data = useActionData();
   const errors = data?.errors || {}
   const status = data?.status || null
   
   
   return <div className="shadow-lg rounded-3 col-5 p-4 bg-body-tertiary">
      {status && <h3 className="mb-3 bg-success text-white">Usuário criado com sucesso</h3>}
      <h2 className='mb-3'>Cadastre-se</h2>
      <Form method="post">
         <div className="mb-3 text-start">
            <label htmlFor="name" className="form-label">Nome de Usuário:</label>
            <input type="text" name="name" id="name" className="form-control" />
            {errors.name && <small className="text-danger">{errors.name[0]}</small>}
         </div>
         <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" name="email" id="email" className="form-control" />
            {errors.email && <small className="text-danger">{errors.email[0]}</small>}
         </div>
         <div className="mb-3  text-start">
            <label htmlFor="password" className="form-label">Senha:</label>
            <input type="password" name="password" id="password" className="form-control" />
            {errors.password && <small className="text-danger">{errors.password[0]}</small>}
         </div>
         <div className="mb-3  text-start">
            <label htmlFor="password_confirmation" className="form-label">Repita Senha:</label>
            <input type="password" name="password_confirmation" id="password_confirmation" className="form-control" />
            {errors.password_confirmation && <small className="text-danger">{errors.password_confirmation[0]}</small>}
         </div>
         <div className=''>
            <span>
               <button type="submit" className='btn btn-primary mx-2'>Cadastrar <i className="fa-solid fa-user-plus"></i></button>
               <button type="reset" className='btn btn-warning mx-2'>Limpar <i className="fa-solid fa-x"></i></button>
            </span>
            <small>Já é cadastrado? Clique <Link to='/'>aqui</Link></small>
         </div>
      </Form>
   </div> 
}

export default Logup