import { useState} from 'react'

const useHomeHook = () => {
   const [state, setState] = useState('')
   const getData = async () => {
      const data = await fetch('/api', {
         method: 'get',
         headers: {
            'Content-Type': 'application/json'
         }
      })

      const json = await data.json()
      setState(json)
   }



   return {getData, state}
}

export default useHomeHook