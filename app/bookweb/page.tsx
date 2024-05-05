"use client"
import React, { useRef } from 'react'
import { books } from '../books/data';
import BookCard from '../blog/BookCard';
import { auth } from '../firebase/config';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';

type Props = {}

const BookWeb = (props: Props) => {
  let serRef = useRef<HTMLInputElement>(null);
  let router = useRouter()
  let user = auth.currentUser;
  console.log(user)
  if (!user||sessionStorage.getItem('user')===null) router.push('/')

  let SerButton =async (e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    let SerVal = serRef.current?.value||'';
    console.log(SerVal)
    let filtered = books.filter(b=>b.title.includes(SerVal))
    console.log(filtered)
  }
  let handleLogOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      router.push('/')
      sessionStorage.removeItem('user')
      console.log('logged out')
    }).catch((error) => {
      console.log(error)
      // An error happened.
    });
  }

    
  return (
    <div className='bg-green-100 p-4 h-[100%] m-auto'>
       <p onClick={handleLogOut} className='hover:cursor-pointer bg-pink-600 text-white py-2 px-3 w-fit'>LogOut</p>
        <p className='text-2xl text-center'> Search for your desired book</p>
    
        <form className='flex flex-row justify-center my-5'>

          <div className='my-3 w-[40%]'>
              <input ref={serRef} className='w-full p-2 rounded border-[1px] border-gray-100 ' placeholder='Search '/>
          </div>

          <button onClick={(e:React.MouseEvent<HTMLButtonElement>)=>SerButton(e)} type='submit' className='bg-gray-500 text-white  px-2 rounded mx-3'>Search</button>

        </form>

        <div className='grid grid-cols-5 gap-3'>
          {
            books.map(b=>(
              <BookCard book={b}/>

            ))
          }
        </div>

    </div>
  )
}
export default BookWeb;