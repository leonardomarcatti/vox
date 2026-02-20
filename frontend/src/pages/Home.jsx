import StatusContainer from '../components/StatusContainer'
import { useRouteLoaderData } from 'react-router-dom'

const Home = () => {
   const data = useRouteLoaderData('home')
   
   
   return <>
      <h1>Home Page</h1>
      <div className="container">
         <div className="row">
            <StatusContainer style='bg-danger-subtle' title='Todo' status='1' tasks={data?.tasks} />
            <StatusContainer style='bg-warning-subtle' title='Doing' status='2' tasks={data?.tasks} />
            <StatusContainer style='bg-success-subtle' title='Done' status='3' tasks={data?.tasks} />
         </div>
      </div>
   </>
}

export default Home