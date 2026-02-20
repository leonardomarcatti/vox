import Task from "./Task"

const StatusContainer = ({style, title}) => {
   return <div className={`col ${style}`}>
      <h2>{title}</h2>
      
   </div>
}

export default StatusContainer