import { Link } from "react-router-dom"
import {useDraggable} from '@dnd-kit/react'

const Task = ({title, description, taskID}) => {
   const {ref} = useDraggable({id: String(taskID)})
   
   return <div className="p-3 my-3 border-2 border border-dark-subtle rounded bg-secondary-subtle" ref={ref}>
      <span className="position-relative" >
         <Link to={`editTask/${taskID}`}>
            <i className="fa-solid fa-pencil text-success position-absolute  top-1 end-0 mx-4"></i>
         </Link>
         <Link to={`deleteTask/${taskID}`}>
            <i className="fa-solid fa-trash text-danger position-absolute  top-1 end-0 mx-0"></i>
         </Link>
      </span>
      <h4>{title}</h4>
      <p>{description}</p>
   </div>
}

export default Task