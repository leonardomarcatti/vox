import { redirect } from "react-router-dom";

const loginAction = async ({ request }) => {
   const userData = await request.formData();
   const body = {
      email: userData.get('email'),
      password: userData.get('password'),
   }

   const response = await fetch('/api/login', {
      method: 'post',
      headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json',
      },
      body: JSON.stringify(body)
   })

   if (response.status === 200) {
      const json = await response.json()
      sessionStorage.setItem('token', json.token)
      return redirect('/home')
   }

   return null
}


const logupAction = async ({request, params}) => {
   const userData = await request.formData()
   const body = {
      name: userData.get('name'),
      email: userData.get('email'),
      password: userData.get('password'),
      password_confirmation: userData.get('password_confirmation')
   }

   const response = await fetch('/api/logup', {
      method: 'post',
      headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json',
      },
      body: JSON.stringify(body)
   })

   const json = await response.json()
   return json
}

const newTaskAction = async ({request, params}) => {
   const formData = await request.formData()
   const body = {
      title: formData.get('title'),
      description: formData.get('description')
   }
   const token = sessionStorage.getItem('token')

   const response = await fetch('/api/newTask', {
      method: 'detete',
      headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json',
         'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(body)
   })

   const json = await response.json()
   console.log(response, json);

   if (response.status == 200) {
      document.querySelector('#btn_delete_modal').click()
   }
   
   return json
}

const editTaskAction = async ({ request, params }) => {
   const formData = await request.formData()
   const body = {
      title: formData.get('title'),
      description: formData.get('description'),
      id: formData.get('id'),
   }
   const token = sessionStorage.getItem('token')

   const response = await fetch(`/api/editTask`, {
      method: 'post',
      headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json',
         'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(body)
   })

   const json = await response.json()

   if (response.status == 200) {
      document.querySelector('#btn_modal').click()
   }
   console.log(json);
   
   return json
}

const deleteTaskAction = async ({ request, params }) => {
   const formData = await request.formData()
   const body = {
      id: formData.get('id'),
   }
   const token = sessionStorage.getItem('token')

   const response = await fetch(`/api/deleteTask/${params.id}`, {
      method: 'delete',
      headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json',
         'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(body)
   })

   const json = await response.json()
   console.log(json);

   return json
}

export { logupAction, loginAction, newTaskAction, editTaskAction, deleteTaskAction }