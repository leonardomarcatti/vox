import { useDraggable } from "@dnd-kit/react";

const Task = ({ title, description, taskID }) => {
   const {
      ref,
      listeners,
      attributes,
      transform,
      isDragging
   } = useDraggable({
      id: String(taskID), // ⭐ sempre string
   });

   const style = {
      transform: transform
         ? `translate(${transform.x}px, ${transform.y}px)`
         : undefined,

      // 👇 segredo do efeito profissional
      opacity: isDragging ? 0.3 : 1,
      cursor: "grab",
   };

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