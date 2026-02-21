import Task from "./Task"
import { Link } from "react-router-dom"

const StatusContainer = ({style, title, status, tasks, newTask}) => {
   return <div className={`col ${style}`}>         
      <h2>{title}</h2>
      {
         newTask && <Link to='newTask'><button type="button" className="btn btn-sm btn-primary">Nova Tarefa</button></Link>
      }
      {
         tasks.map((task) => {
            if (task.id_status == status) {
               return <Task key={task.id} title={task.title} description={task.description} taskID={task.id}/>
            }
         })
      }
   </div>

}

export default StatusContainer