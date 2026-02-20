import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../layout/Layout'
import Logup from '../components/Logup'
import Login from '../components/Login'
import { getData } from '../utils/loaders'
import { loginAction, logupAction } from '../utils/acition'

const routes = createBrowserRouter([
   {path: '/home', element: <Layout />, children: [
      {index: true, element: <Home/>, loader: getData}
   ]},
   {path: 'logup', element: <Logup />, action: logupAction},
   {path: 'login', element: <Login />, action: loginAction},
])

export default routes