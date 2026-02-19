import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../layout/Layout'
import Logup from '../components/Logup'
import Login from '../components/Login'

const routes = createBrowserRouter([
   {path: '/home', element: <Layout />, children: [
      {index: true, element: <Home/>}
   ]},
   {path: 'logup', element: <Logup />},
   {path: '/', element: <Login />}
])

export default routes