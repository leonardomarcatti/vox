import { Link, useActionData } from "react-router-dom";
import Modal from "../components/Modal";
import TaskForm from "../components/TaskForm";

const NewTask = () => {
   const data = useActionData()
   const errors = data?.errors || {}

   return <div className="container">
      <Link to='..'>Voltar</Link>
      <div className="col-6 offset-3">
         <h1>Nova Tarefa</h1>
         <TaskForm errors={errors} />
         <Modal title='Sucesso' txt='Tarefa alterada com sucesso!' />
      </div>
   </div>
}

export default NewTask