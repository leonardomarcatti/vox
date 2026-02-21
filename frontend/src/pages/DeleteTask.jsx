import DeleteModal from "../components/DeleteModal";
import { useLoaderData } from "react-router-dom";

const DeleteTask = () => {
   const {task} = useLoaderData()   
   return <DeleteModal id={task[0].id}/>
}

export default DeleteTask