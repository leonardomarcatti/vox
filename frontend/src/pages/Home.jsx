import StatusContainer from '../components/StatusContainer'
import { useRouteLoaderData } from 'react-router-dom'
import { handleDragEnd } from '../utils/dargDrop'
import { DragDropProvider } from '@dnd-kit/react'
import { useRevalidator } from "react-router-dom";

const Home = () => {
   const data = useRouteLoaderData('home')
   const { revalidate } = useRevalidator();
   
   
   return <DragDropProvider onDragEnd={(event) => handleDragEnd(event, revalidate)}>
      <h1>Home Page</h1>
      <div className="container">
         <div className="row">
            <StatusContainer style='bg-danger-subtle' title='Todo' status='1' tasks={data?.tasks} newTask='true'/>
            <StatusContainer style='bg-warning-subtle' title='Doing' status='2' tasks={data?.tasks}/>
            <StatusContainer style='bg-success-subtle' title='Done' status='3' tasks={data?.tasks}/>
         </div>
      </div>
   </DragDropProvider>
}

export default Home