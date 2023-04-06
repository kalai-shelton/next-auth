import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { SignIn } from '@/components/Login/components'
import { getSession,useSession,signOut } from 'next-auth/react'


export default function Home() {
  const {data:session}=useSession()


  return (
    <>
      <Head>

        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>
      <main>
   {session? User({session}):Guest()}
     </main>
    </>
  )
}
function handleSignOut(){
  signOut()
    }

function Guest(){
  return(
    <div className='py-20 text-center'>
      Guest User
    </div>
  )
}

function User({session}){
  return(
    <div className='py-20 text-center'>
      <div className='py-6 text-xl'>Authenticated User <span className=' font-bold'>{session?.user?.name}</span> </div>
      <button className='bg-blue-700 px-5 shadow-lg text-white py-1 rounded-md' onClick={()=>handleSignOut()}>Sign Out</button>
    </div>
  )
  }
  export async function getServerSideProps ({req}){
    const session = await getSession({req})

    if(!session){
      return {
      redirect:{
        destination:'/login',
        permanent:false
      }
    }
    }

    return {
      props:{session}
    }
  }
