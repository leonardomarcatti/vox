import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../layout/Layout'
import Logup from '../components/Logup'
import Login from '../components/Login'
import NewTask from '../pages/NewTask'
import { checkAuthorization, logout } from '../utils/loaders'
import { loginAction, logupAction, newTaskAction } from '../utils/action'
import Error from '../pages/Error'

const routes = createBrowserRouter([
   {
      path: '/home', element: <Layout />, shouldRevalidate: () => true, id:'home', loader: checkAuthorization, children: [
      {index: true, element: <Home/>},
      {path: 'newTask', element: <NewTask/>, action: newTaskAction},
   ]},
   {path: '/', errorElement: <Error /> ,children: [
      { index: true, element: <Login />, action: loginAction },
      {path: 'logup', element: <Logup />, action: logupAction},
      {path: 'logout', loader: logout},
   ]},
   {path: '*', element: <Error />}
])

export default routes