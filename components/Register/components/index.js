import React, { useState } from 'react'
import { LoginLayout } from '@/components/LoginLayout'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Register = () => {
    const [show, setShow]= useState({password:false,cPassword:false})
    const [isName, setName]=useState(null)
    const [isEmail, setEmail]=useState(null)
    const [isPwd, setPwd]=useState(null)
    const [isCPwd, setCPwd]=useState(null)

const router = useRouter()

    var data={
      username: isName,
      email: isEmail,
      password:isPwd,
      // cpassword:isCPwd
    }

   async function onSubmit (){
    const options={
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(data)
    }
    await fetch('http://localhost:3000/api/auth/signup',options)
    .then(res=>res.json)
    .then(dat=>{
      if(dat){
        router.push("http://localhost:3000"),
      console.log(dat)}})
      console.log("submit",show, isName, isEmail,isCPwd, isPwd)
    }
  return (
    <LoginLayout>
    <div className='py-10'>
            <div className='text-center text-xl font-bold'>User Registration</div>
            <div className=' pt-2 text-center text-xs'>Please enter your Details</div>
          </div>
          <form className="">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                Username
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={(e)=>setName(e.target.value)} />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
               Email Id
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email Id" onChange={(e)=>setEmail(e.target.value)}/>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                Password
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" onChange={(e)=>setPwd(e.target.value)}/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="confirm password">
                Confirm Password
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" onChange={(e)=>setCPwd(e.target.value)}/>
            </div>
            <div className="mb-4 mt-6">
              <button className="w-full bg-blue-600 shadow-md py-2 text-white rounded-md hover:bg-blue-800 font-medium " onClick={onSubmit}>
                Register
              </button>

            </div>
         
            <div className='pt-6 text-center mb-10'>Already have an account?
              <span className='pl-4 font-medium text-blue-500'><Link href={"/login"}>Sign In</Link></span>
            </div>
          </form>
    </LoginLayout>
  )
}


