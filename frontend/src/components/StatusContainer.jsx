import Task from "./Task"
import { Link } from "react-router-dom"

const StatusContainer = ({style, title, status, tasks, newTask}) => {
   return <div className={`col ${style}`}>         
      <h2>{title}</h2>
      {
         newTask && <Link to='newTask'><button type="button" className="btn btn-sm btn-primary">Nova Tarefa</button></Link>
      }
      {
         tasks.map((task, id) => {
            if (task.id_status == status) {
               return <Task title={task.title} description={task.description}/>
            }
         })
      }
   </div>

}

export default StatusContainer