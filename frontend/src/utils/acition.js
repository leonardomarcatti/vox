const loginAction = () => {

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
   console.log(json);
   
   return json

}

export {logupAction, loginAction}