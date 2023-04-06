import Link from 'next/link'
import React,{useState} from 'react'
import { FcGoogle } from 'react-icons/fc'
import { BsGithub } from 'react-icons/bs'
import { LoginLayout } from '@/components/LoginLayout'
import {signIn,signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

export const SignIn = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const [isName, setName]=useState(null);
  const [isPasswd, setPasswd]=useState(null)
const router = useRouter()


  const handleName =(e)=>{
    setName(e.target.value)
  }
  const handlePwd =(e)=>{
    setPasswd(e.target.value)
  }
async function onSubmitHandler(data){
 const status = await signIn('credentials',{
    redirect:false,
    email:data.email,
    password:data.password,
    // email:isName,
    // password:isPasswd,
    callbackUrl:"/"
  })
 if(status.ok){
router.push(status.url)
 }
}

//Google Handler Function
async function handleGoogleSignIn(e){
  e.preventDefault()
  signIn('google',{callbackUrl:"http://localhost:3000"})
}
async function handleGithubSignIn(e){
  e.preventDefault()
  signIn('github',{callbackUrl:"http://localhost:3000"})
}


  return (
    <LoginLayout>
          <div className='py-10'>
            <div className='text-center text-xl font-bold'>LOGIN FORM</div>
            <div className=' pt-2 text-center text-xs'>User login</div>
          </div>
          <form className="" onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" >
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register("email")} placeholder="email"  />
              <p className='text-xs text-red-400'>{errors.email?.message}</p>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" >
                Password
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register("password")}
        placeholder="password"
        type="password"
        required/>
        <p className='text-xs text-red-400'>{errors.password?.message}</p>
            </div>
            <div className="mb-4 mt-6">
              <button className="w-full bg-blue-600 shadow-md py-2 text-white rounded-md hover:bg-blue-800 font-medium "type="submit">
                LOGIN
              </button>

            </div>
            <div className="mb-4 mt-6">
              <button className="w-full flex gap-x-3 justify-center items-center  shadow-md py-2 border  rounded-md hover:bg-gray-100 " onClick={(e)=>handleGoogleSignIn(e)}>
                Sign in with Google <span><FcGoogle size={"20"} /></span>
              </button>

            </div>
            <div className="mb-4 mt-6">
              <button className="w-full flex gap-x-3 justify-center items-center shadow-md py-2 border  rounded-md hover:bg-gray-100" onClick={(e)=>handleGithubSignIn(e)}>
                Sign in with Github <span><BsGithub size={"20"} /></span>
              </button>

            </div>
            <div className='pt-6 text-center mb-10'>Dont have an account yet?
              <span className='pl-4 font-medium text-blue-500'><Link href={"/register"}>Sign Up</Link></span>
            </div>
          </form>
      

    </LoginLayout>
  )
}


