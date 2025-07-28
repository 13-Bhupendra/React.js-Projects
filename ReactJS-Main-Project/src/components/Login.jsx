import axios, { AxiosError } from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Login = () => {

  const [email , setemail] = useState("")
  const [password , setpassword] = useState("")

  const handleLogin = async (e)=> {
    e.preventDefault()
    const userData = {email : email , password : password}
    console.log(userData)

    try {
      const res = await axios.post("https://reqres.in/ap/login" , userData, {
          headers: {
    "Content-Type": "application/json",
        "    x-api-key":" reqres-free-v1"
  },
      })
      console.log(res.data.token)
      
    } catch (error) {
    }
  }

  return (
    <div className='container'>
        <h1>Login</h1>
       <form action="" onSubmit={handleLogin}>
        <label htmlFor="">Email</label> <br />
         <input className='m-2 w-50' type="text" name='email' value={email} onChange={(e)=>setemail(e.target.value)} /> <br /><br />
        <label htmlFor="">Password</label><br />
        <input className='m-2 w-50' type="password" name='password' value={password} onChange={(e)=> setpassword(e.target.value)} /> <br />
        <input type="submit" className='m-2 mt-4 btn btn-primary' />
       </form>
    </div>
  )
}

export default Login
