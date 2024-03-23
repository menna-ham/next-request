import React from 'react'

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
  return (
    <div className=' bg-gray-200 gap- text-center '>
        {book.title}
    </div>
  )
}
export default BookCard;