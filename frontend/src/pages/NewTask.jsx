import { Link, Form, useActionData } from "react-router-dom";
import Modal from "../components/Modal";

const NewTask = () => {
   const data = useActionData()
   const errors = data?.errors || {}

   return <div className="container">
      <Link to='..'>Voltar</Link>
      <div className="col-6 offset-3">
         <h1>Nova Tarefa</h1>
         <Form method="POST">
            <div className="mb-3 text-start">
               <label htmlFor="title" className="form-label">Título</label>
               <input type="text" name="title" id="title" className="form-control"/>
               {errors.title && <small className="text-danger">{errors.title[0]}</small>}
            </div>
            <div className="mb-3  text-start">
               <label htmlFor="description" className="form-label">Descrição</label>
               <textarea name="description" id="description" className="form-control" rows='10'></textarea>
               {errors.description && <small className="text-danger">{errors.description[0]}</small>}
            </div>
            <div className="mb-3  text-start">
               <button type="submit" className="btn btn-primary">Criar</button>
               <button type="button" className="btn btn-warning mx-2">Limpar</button>
            </div>
         </Form>
         <Modal />
      </div>
   </div>
}

export default NewTask