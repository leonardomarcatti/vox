import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../layout/Layout'
import Logup from '../components/Logup'
import Login from '../components/Login'
import { checkAuthorization, logout } from '../utils/loaders'
import { loginAction, logupAction } from '../utils/action'

const routes = createBrowserRouter([
   {path: '/home', element: <Layout />, id:'home', loader: checkAuthorization, children: [
      {index: true, element: <Home/>}
   ]},
   {path: 'logup', element: <Logup />, action: logupAction},
   {path: 'login', element: <Login />, action: loginAction},
   {path: 'logout', loader: logout},
])

export default routes