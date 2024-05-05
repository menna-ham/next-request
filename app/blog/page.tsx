"use client"
import React from 'react'
import { books } from '../books/data'
import BookCard from './BookCard'
import { useRouter } from 'next/navigation'
import { ToastContainer } from 'react-toastify'

type Props = {}

const page = (props: Props) => {
  let router = useRouter()

  let adding = ()=>{
    router.push('./new-book')
  }

  return (
    <div className='m-4 text-center'>

      <h1 className='font-bold text-3xl my-7'> Browsig All Books</h1>
      <div>
        <div className='mb-5'>
          <button onClick={adding} className='bg-green-600 px-4 py-3 me-3 text-white'>Add New Book</button>
          <button className='bg-red-500 text-white py-3 px-4'>Delete Book</button>
        </div>
        <div className='grid grid-cols-5 gap-3'>
          {
            books.map(b => (
              <BookCard key={b.id} book={b} />

            ))
          }
        </div>

      </div>

    </div>
  )
}
export default page