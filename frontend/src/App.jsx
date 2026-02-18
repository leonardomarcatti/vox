import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
   const [state, setState] = useState('')
   const getData = async () => {
      const data = await fetch('/api/', {
         method: 'get',
         headers: {
            'Content-Type': 'application/json'
         }
      })

      const json = await data.json()
      setState(json)
   }

   useEffect(() => {
      getData()
   }, [])


  return <>
         <h1>{state.message}</h1>
  </>
}

export default App
