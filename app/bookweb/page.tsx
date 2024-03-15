import React from 'react'

type Props = {}

const BookWeb = (props: Props) => {
    
  return (
    <div className='bg-green-100 p-4 h-[100vh]'>
        <p className='text-2xl'> Search for your desired book</p>
    
        <form className='flex flex-row'>
        <div className='my-3 w-[25%]'>
            <input className='w-full p-2 rounded border-[1px] border-gray-100 ' placeholder='Search '/>
        </div>
        <button type='submit' className='bg-gray-500 text-white  px-2 rounded mx-3'>Search</button>
        </form>


    </div>
  )
}
export default BookWeb;