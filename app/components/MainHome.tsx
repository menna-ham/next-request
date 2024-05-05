"use client"
import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import { auth } from '../firebase/config'
import { useRouter } from 'next/navigation'

type Props = {}

const MainHome = (props: Props) => {
    let [Log,setLog] = React.useState('login')
    // let myUser = auth.currentUser
    // let router = useRouter()

    // if (myUser|| sessionStorage.getItem('user')){
    //   router.push('./bookweb')
    // }else{ router.push('/')}

  return (
    <div className='p-3 bg-pink-200 m-auto h-[100vh]'>
        <div className='flex flex-row justify-center content-center my-5'>
              <div className='me-3'>
                <button onClick={()=>setLog('login')} className={`${Log=='login'?'bg-purple-500':'bg-gray-400'} text-white font-bold text-xl p-2 rounded`}>Login</button>
              </div>
              <div className='ms-3'>
                <button onClick={()=>setLog('signup')} className={`${Log=='signup'?'bg-purple-500':'bg-gray-400'} text-white font-bold text-xl p-2 rounded`}>Sign Up</button>
              </div>
          </div>

          <div className='flex flex-row justify-center my-5 w-[75%]  m-auto'>
            {
                Log=='login'?<Login></Login>:<SignUp></SignUp>
            }
          </div>
    </div>
  )
}

export default MainHome;