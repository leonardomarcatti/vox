import { Link } from "react-router-dom";
import { useDraggable } from "@dnd-kit/react";

const TaskItem = ({ title, description, taskID }) => {
   const { ref, listeners, attributes, transform } = useDraggable({
      id: String(taskID),
   });

   const style = transform
      ? {
         transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
      : undefined;

   return (
      <div
         ref={ref}
         style={style}
         {...listeners}
         {...attributes}
         className="p-3 my-3 border-2 border border-dark-subtle rounded bg-secondary-subtle position-relative"
      >
         <Link
            to={`editTask/${taskID}`}
            className="position-absolute top-0 end-0 mx-4 text-success"
         >
            <i className="fa-solid fa-pencil"></i>
         </Link>

         <Link
            to={`deleteTask/${taskID}`}
            className="position-absolute top-0 end-0 mx-0 text-danger"
         >
            <i className="fa-solid fa-trash"></i>
         </Link>

         <h4>{title}</h4>
         <p>{description}</p>
      </div>
   );
};

export default TaskItem;