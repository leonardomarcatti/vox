import { useState } from "react";
import StatusContainer from "../components/StatusContainer";
import Task from "../components/Task";
import { useRouteLoaderData, useRevalidator } from "react-router-dom";
import { handleDragEnd } from "../utils/dragDrop";
import { DragDropProvider, DragOverlay } from "@dnd-kit/react";

const Home = () => {
   const data = useRouteLoaderData("home");
   const { revalidate } = useRevalidator();

   const [activeId, setActiveId] = useState(null);

   // task atualmente sendo arrastada
   const activeTask = data?.tasks?.find(
      (task) => String(task.id) === String(activeId)
   );

   return (
      <DragDropProvider
         onDragStart={(event) => {
            const id = event.operation?.source?.id;
            setActiveId(id);
         }}
         onDragEnd={(event) => {
            handleDragEnd(event, revalidate);
            setActiveId(null);
         }}
      >
         <h1>Home Page</h1>

         <div className="container">
            <div className="row">
               <StatusContainer
                  style="bg-danger-subtle"
                  title="Todo"
                  status="1"
                  tasks={data?.tasks}
                  newTask="true"
               />

               <StatusContainer
                  style="bg-warning-subtle"
                  title="Doing"
                  status="2"
                  tasks={data?.tasks}
               />

               <StatusContainer
                  style="bg-success-subtle"
                  title="Done"
                  status="3"
                  tasks={data?.tasks}
               />
            </div>
         </div>

         {/* 👇 Overlay SOMENTE visual */}
         <DragOverlay>
            {activeTask ? (
               <Task
                  title={activeTask.title}
                  description={activeTask.description}
               />
            ) : null}
         </DragOverlay>
      </DragDropProvider>
   );
};

export default Home;