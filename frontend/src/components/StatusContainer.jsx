import Task from "./Task"
const StatusContainer = ({style, title, status, tasks}) => {
   return <div className={`col ${style}`}>
      <h2>{title}</h2>
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