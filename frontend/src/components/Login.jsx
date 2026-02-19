const login = () => {
   return <div className="shadow-lg rounded-3 col-5 p-4 bg-body-tertiary">
      <h2 className='mb-3'>Login</h2>
      <form action="" method="post">
         <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" name="email" id="email" className="form-control" />
         </div>
         <div className="mb-3  text-start">
            <label htmlFor="senha" className="form-label">Senha:</label>
            <input type="password" name="password" id="password" className="form-control" />
         </div>
         <span className=''>
            <button type="submit" className='btn btn-primary mx-2'>Login <i class="fa-solid fa-lock-open"></i></button>
            <button type="reset" className='btn btn-warning mx-2'>Limpar <i class="fa-solid fa-x"></i></button>
         </span>
      </form>
   </div>
}

export default login