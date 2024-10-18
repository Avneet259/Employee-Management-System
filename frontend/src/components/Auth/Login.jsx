import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Form Submitted")
    console.log("Email is", email)
    console.log("Password is", password)

    setEmail('')
    setPassword('')
  }

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='border-2 border-emerald-600 rounded-xl p-20'>
        <form onSubmit={(e) => {submitHandler(e)}} className='flex flex-col items-center justify-center'>
          <input value={email} onChange={(e) => {setEmail(e.target.value)}} required className='border-2 border-emerald-600 rounded-full py-3 px-5 text-lg outline-none bg-transparent placeholder:text-gray-400' type="email" placeholder='Enter your email'/>
          <input value={password} onChange={(e) => {setPassword(e.target.value)}} required className='border-2 border-emerald-600 rounded-full py-3 px-5 text-lg outline-none bg-transparent placeholder:text-gray-400 mt-3' type="password" placeholder='Enter your password'/>
          <button className='bg-emerald-600 hover:bg-emerald-700 rounded-full py-3 px-8 w-full text-white text-lg outline-none placeholder:text-white mt-7'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
