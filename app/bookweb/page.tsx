"use client"
import React, { useRef } from 'react'
import { books } from '../books/data';

type Props = {}

const BookWeb = (props: Props) => {
  let serRef = useRef<HTMLInputElement>(null);

  let SerButton =async (e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    let SerVal = serRef.current?.value;
    // let filtered = books.filter(b=>b.title.includes(SerVal))
  }
    
  return (
    <div className='bg-green-100 p-4 h-[100vh] m-auto'>
        <p className='text-2xl text-center'> Search for your desired book</p>
    
        <form className='flex flex-row justify-center my-5'>

          <div className='my-3 w-[40%]'>
              <input ref={serRef} className='w-full p-2 rounded border-[1px] border-gray-100 ' placeholder='Search '/>
          </div>

          <button onClick={(e:React.MouseEvent<HTMLButtonElement>)=>SerButton(e)} type='submit' className='bg-gray-500 text-white  px-2 rounded mx-3'>Search</button>

        </form>


    </div>
  )
}
export default BookWeb;