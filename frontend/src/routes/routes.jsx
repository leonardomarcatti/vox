import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../layout/Layout'

const routes = createBrowserRouter([
   {path: '/', element: <Layout />, children: [
      {index: true, element: <Home/>}
   ]},
   {path: 'logup', element:}
])

export default routes