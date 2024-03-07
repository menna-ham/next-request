import { books } from "../data";
import { NextURL } from "next/dist/server/web/next-url";
import { redirect } from "next/navigation";

export async function GET(request:NextURL,{params}:{params:{id:string}}){
    let foundBook= books.find(b=>b.id===parseInt(params.id))
    
    if(parseInt(params.id)>books.length )
        redirect('/books')

    if(foundBook){
        return Response.json(foundBook)
    }else{
        return Response.json(books)
    }
}

export async function DELETE (request:NextURL, {params}:{params:{id:string}}){
    let index = books.findIndex(b=>b.id ===parseInt(params.id))
    let delBooks = books[index]
    let filtered = books.splice(index,1);
    return Response.json(books)
    // let deleIndex = books.findIndex((b)=>b.id===parseInt(params.id))
    // let delBook = books[deleIndex];
    // let filtered books.splice()
}