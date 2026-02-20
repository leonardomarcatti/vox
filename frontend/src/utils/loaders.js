const getData = async () => {
   const data = await fetch('/api/', {
      method: 'get',
      headers: {
         'Content-Type': 'application/json'
      }
   })

   const json = await data.json()
   return json
}


export {getData}