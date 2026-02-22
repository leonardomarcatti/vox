import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../layout/Layout'
import Logup from '../pages/Logup'
import Login from '../pages/Login'
import NewTask from '../pages/NewTask'
import { checkAuthorization, logout, getTask } from '../utils/loaders'
import { loginAction, logupAction, newTaskAction, editTaskAction, deleteTaskAction } from '../utils/action'
import Error from '../pages/Error'
import EditTask from '../pages/EditTask'
import DeleteTask from '../pages/DeleteTask'

const routes = createBrowserRouter([
   {
      path: '/',
      errorElement: <Error />,
      children: [
         { index: true, element: <Login />, action: loginAction },
         { path: 'logup', element: <Logup />, action: logupAction },
         { path: 'logout', loader: logout },
         {path: 'home', element: <Layout />, loader: checkAuthorization, shouldRevalidate: () => true, id: 'home', children: [
               { index: true, element: <Home /> },
               { path: 'newTask', element: <NewTask />, action: newTaskAction },
               { path: 'editTask/:id', element: <EditTask />, loader: getTask, action: editTaskAction },
               { path: 'deleteTask/:id', element: <DeleteTask />, loader: getTask, action: deleteTaskAction },
            ]
         }
      ]
   },
   { path: '*', element: <Error /> }
]);

export default routes