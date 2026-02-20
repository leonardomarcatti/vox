const Task = ({title, description}) => {
   return <div className="p-3 my-3 border-2 border border-dark-subtle rounded bg-secondary-subtle">
      <h4>{title}</h4>
      <p>{description}</p>
   </div>
}

export default Task