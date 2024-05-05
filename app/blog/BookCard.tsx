import { doc, getDoc } from 'firebase/firestore'
import React from 'react'
import { db } from '../firebase/config'
import { json } from 'stream/consumers'
import { deleteDoc } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify'
import Link from 'next/link'

type Props = {
    book:{
        id:number,
        title: string,
        isbn:string|null,
        pageCount: number,
        authors: string[],
    }
}

const BookCard = ({book}: Props) => {
  let handleDelete = async(id: number)=>{
    try{
      let delRef = doc(db,"Books",JSON.stringify(id))
      let delDoc = await getDoc(delRef)
      console.log(delDoc)
      await deleteDoc(delRef)
      console.log('deleted')
      toast('Deleted Successfully',{
        hideProgressBar:true,autoClose:1000,type:'success',position:'top-left'
      })
    }catch(err){
      console.log(err)
    }


  }

  return (
    <div className=' bg-gray-200 text-center '>
      <div>
          
          {book.title}
      </div>
      <div>
        <button className='bg-yellow-400 p-1 me-1'><Link href={{pathname:'./update-book', query:{id:JSON.stringify(book.id)}}}>Update</Link></button>
        <button onClick={()=>handleDelete(book.id)} className='bg-red-600 p-1 me-1 text-white'>Delete</button>
      </div>
    </div>

  )
}
export default BookCard;