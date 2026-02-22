import { useDraggable } from "@dnd-kit/react";

const Task = ({ title, description, taskID }) => {
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
         className="card mb-2 p-2"
      >
         <strong>{title}</strong>
         <p>{description}</p>
      </div>
   );
};

export default Task;