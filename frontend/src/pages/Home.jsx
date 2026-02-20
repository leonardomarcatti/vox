import {useLoaderData} from 'react-router-dom'

const Home = () => {
   const data = useLoaderData()

   return <>
      <h1>Home Page</h1>
      <h2>{data.message}</h2>
   </>
}

export default Home