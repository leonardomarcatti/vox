import { redirect } from "react-router-dom";

const checkAuthorization = async () => {
   const token = sessionStorage.getItem('token')

   if (!token) {
      throw redirect("/");
   }

   const response = await fetch('/api/home', {
      method: 'get',
      headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json',
         'Authorization': `Bearer ${token}`,
      },
   })
   
   if (response.status === 401) {
      throw redirect("/");
   }
   const json = await response.json() 

   return json
}

const logout = () => {
   sessionStorage.clear()
   return redirect("/");
}

const getTask = async ({params}) => {
   const token = sessionStorage.getItem('token')
   const response = await fetch(`/api/getTask/${params.id}`, {
      method: 'get',
      headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json',
         'Authorization': `Bearer ${token}`,
      },
   })

   if (!response.ok) {
      throw redirect("/home");
   }

   const json = await response.json()
   return json
}


export { checkAuthorization, logout, getTask }