const TaskPreview = ({ title, description }) => {
   return (
      <div className="card mb-2 p-2 shadow-lg">
         <strong>{title}</strong>
         <p>{description}</p>
      </div>
   );
};

export default TaskPreview;