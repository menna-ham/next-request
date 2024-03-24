// "use client"
import React from 'react'
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/config';
import { useRouter } from 'next/navigation';

type Props = {}

const Login = (props: Props) => {
    let [userCredintials, setUserCredintials] = React.useState({ email: '', password: '' })
    let router = useRouter()

    let handleUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const { name, value } = e.target;
        setUserCredintials((prev) => ({ ...prev, [name]: value }));
        console.log(userCredintials)
    }

    let handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(userCredintials)
        signInWithEmailAndPassword(auth, userCredintials.email, userCredintials.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                router.push('./bookweb')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    let handleReset=()=>{
        let email= prompt('Please Enter your Email...')||''
        sendPasswordResetEmail(auth, email)
        alert('Check Inbox')
    }



    return (
        <div className='w-[70%]'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className='flex flex-col mb-4 '>
                    <label>Email</label>
                    <input onChange={(e) => handleUser(e)} type="text" placeholder='Login with your Email' name="email" id="email" className='p-3 text-gray-900 bg-white border-[1px] border-gray-300 rounded ' />
                </div>

                <div className='flex flex-col mb-4'>
                    <label>Password</label>
                    <input onChange={(e) => handleUser(e)} type="password" placeholder='Please type your Password' name="password" id="pass" className='p-3 text-gray-900 bg-white border-[1px] border-gray-300 rounded ' />
                </div>

                <div>
                    <button type='submit' className='bg-pink-700 px-3 py-2 text-white font-bold rounded'>Login</button>
                </div>
                <div className='m-auto my-3 flex flex-row justify-center'>
                    <p onClick={handleReset} className='text-blue-500 underline text-center '>forget password??</p>
                </div>

            </form>

        </div>
    )
}

export default Login;