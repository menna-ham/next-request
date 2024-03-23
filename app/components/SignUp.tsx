import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase/config'

type Props = {}

const SignUp = (props: Props) => {
  let [userCredintials, setUserCredintials] = React.useState({FullName:'', email: '', password: '' })
  let [Error, setError] = React.useState('');

  // console.log(auth)
  let handleUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setError('');
    const { name, value } = e.target;
    setUserCredintials((prev) => ({ ...prev, [name]: value }));
  }

  let handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(userCredintials)

    createUserWithEmailAndPassword(auth, userCredintials.email, userCredintials.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error: any) => {
        setError(error.message)
        console.log(error.message)
      });

  }

  return (
    <div className='w-[70%]'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='flex flex-col mb-4 '>
          <label>Full Name</label>
          <input onChange={(e) => handleUser(e)} type="text" placeholder='Type your name' name="FullName" id="FullName" className='p-3 text-gray-900 bg-white border-[1px] border-gray-300 rounded ' />
        </div>
        <div className='flex flex-col mb-4 '>
          <label>Email</label>
          <input onChange={(e) => handleUser(e)} type="text" placeholder='Sign Up with your Email' name="email" id="email" className='p-3 text-gray-900 bg-white border-[1px] border-gray-300 rounded ' />
        </div>

        <div className='flex flex-col mb-4'>
          <label>Password</label>
          <input onChange={(e) => handleUser(e)} type="password" placeholder='Please type your Password' name="password" id="pass" className='p-3 text-gray-900 bg-white border-[1px] border-gray-300 rounded ' />
        </div>

        <div>
          <button type='submit' className='bg-pink-700 px-3 py-2 text-white font-bold rounded'>Sign Up</button>
        </div>

        <div>
          {Error && <div className='text-red-500 my-3'> {Error}</div>}
        </div>
      </form>

    </div>
  )
}

export default SignUp;