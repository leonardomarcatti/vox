import { Link, useLoaderData } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import Modal from "../components/Modal";

const EditTask = () => {
   const {task} = useLoaderData()   
   const errors = task?.errors || {}
   return <div className="container">
      <Link to='..'>Voltar</Link>
      <div className="col-6 offset-3">
         <h1>Editar Tarefa</h1>
         <TaskForm task={task} errors={errors}/>
         <Modal title='Sucesso' txt='Tarefa alterada com sucesso!'/>
      </div>
   </div>
}

export default EditTask