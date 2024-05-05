"use client"
import { QuerySnapshot, addDoc, collection, doc, getDocs, onSnapshot, query } from 'firebase/firestore'
import { title } from 'process'
import React, { FormEvent, useState } from 'react'
import { auth, db } from '../firebase/config'
import { books } from '../books/data'
import firebase from 'firebase/compat/app'
import { useRouter, useSearchParams } from 'next/navigation'
import { getDoc } from 'firebase/firestore'
type Props = {}

const page = (props: Props) => {
    let router = useRouter()
    let ser = useSearchParams()
    let serID = JSON.stringify(ser.get('id'))
    // let {id} = router.
    let [book,setBook] = React.useState({
        title:'',
        authors:[],
        ISBN: '',
        pageCount:''
    })
    let [results,setResults] = React.useState([])

    let bookDettails = (e:React.FormEvent<HTMLInputElement>)=>{
        let{name,value} = e.currentTarget;
        setBook((prev)=>({...prev,[name]: value}))
    }

    let getBook = async()=>{
        let b= doc(db,'Books',serID)

        let found = await getDoc(b)
        console.log(found)
        //.then((documentData) => {
        //     if (documentData) {
        //       // Handle the retrieved document data
        //       console.log(documentData);
        //     }
        //   })
        //   .catch((error) => {
        //     // Handle errors
        //     console.error(error);
        //   });
        // const querySnapshot = await getDocs(collection(db, "Books"));
        // querySnapshot.forEach((doc) => {
        //     console.log(doc.id, " => ", doc.data());
        // });
    }
    getBook()

    let handleAdding=async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        console.log(book)

        try{
            await addDoc(collection(db,'Books'),{
                title:book.title,
                pageCount:book.pageCount,
                authors:book.authors,
                isbn: book.ISBN
            })
            console.log('added')

        }catch(error){
            console.log(error)
        }

    }



  return (
    <div className='m-7'>
        <h1 className='text-2xl font-bold '> Update Book </h1>

        <div className='my-3'>

            <form>
                <label id='title'>Title</label><br/>
                <input onChange={(e)=>bookDettails(e)} type="text" name='title' className="mb-4 w-full border-[1px] border-gray-300 rounded p-2" placeholder='Enter Title of your Book...'  />

                <label id='authors'>Author</label><br/>
                <input onChange={(e)=>bookDettails(e)} type="text" name='authors' className="mb-4 w-full border-[1px] border-gray-300 rounded p-2" placeholder='Enter the Author of your Book...'  />

                <label id='isbn'>ISBN</label><br/>
                <input onChange={(e)=>bookDettails(e)} type="text" name='ISBN' className="mb-4 w-full border-[1px] border-gray-300 rounded p-2" placeholder='Enter ISBN of your Book...'  />

                <label id='pageCount'>Page Count</label><br/>
                <input onChange={(e)=>bookDettails(e)} type="text" name='pageCount' className="mb-4 w-full border-[1px] border-gray-300 rounded p-2" placeholder='Enter Number of pages of your Book...'  />

                <button onClick={(e)=>handleAdding(e)} type='submit' className='bg-green-500 px-4 py-3 text-white'> Add Book</button>


            </form>

        </div>


    </div>
  )
}

export default page