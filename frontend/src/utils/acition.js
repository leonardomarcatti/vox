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

   const json = await response.json()
   return json
}


const logupAction = async ({request, params}) => {
   const userData = await request.formData();
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

export {logupAction, loginAction}