import { Form } from "react-router-dom";

const TaskForm = ({errors, task}) => {   
   return <>
      <Form method="POST">
      <input type="text" name="id" value={task[0].id} hidden/>
         <div className="mb-3 text-start">
            <label htmlFor="title" className="form-label">Título</label>
            <input type="text" name="title" id="title" className="form-control" defaultValue={task && task[0].title} />
            {errors.title && <small className="text-danger">{errors.title[0]}</small>}
         </div>
         <div className="mb-3  text-start">
            <label htmlFor="description" className="form-label">Descrição</label>
            <textarea name="description" id="description" className="form-control" rows='10' defaultValue={task && task[0].description} ></textarea>
            {errors.description && <small className="text-danger">{errors.description[0]}</small>}
         </div>
         <div className="mb-3  text-start">
            <button type="submit" className="btn btn-primary">Editar</button>
            <button type="reset" className="btn btn-warning mx-2">Limpar</button>
         </div>
      </Form>
   </>
}

export default TaskForm