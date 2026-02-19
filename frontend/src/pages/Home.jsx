import useHomeHook from '../hooks/useHomeHook'
import { useEffect } from 'react'

const Home = () => {
   const { getData, state } = useHomeHook()

   useEffect(() => {
      getData()
   }, [getData])

   return <>
      <h1>Home Page</h1>
      <h2>{state.message}</h2>
   </>
}

export default Home