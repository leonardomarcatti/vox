import { redirect } from "react-router-dom";

const checkAuthorization = async () => {
   const token = sessionStorage.getItem('token')

   if (!token) {
      throw redirect("/login");
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
      throw redirect("/login");
   }

   return response.json()
}

const logout = () => {
   sessionStorage.clear()
   return redirect("/login");
}


export { checkAuthorization, logout }