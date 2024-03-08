import { books } from "../data";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest,{params}:{params:{id:string}}){
    let foundBook= books.find(b=>b.id===parseInt(params.id))
    
    if(parseInt(params.id)>books.length )
        redirect('/books')

    if(foundBook){
        return Response.json(foundBook)
    }else{
        return Response.json(books)
    }
}

export async function DELETE (request:NextRequest, {params}:{params:{id:string}}){
    let index = books.findIndex(b=>b.id ===parseInt(params.id))
    let delBooks = books[index]
    let filtered = books.splice(index,1);
    return Response.json(books)
}


export async function PATCH(request:Request, {params}:{params:{id:string}}){
    let req = await request.json();
    let {title,pageCount} = req;
    let index =books.findIndex(b=>b.id === parseInt(params.id))
    if(index){
        books[index].title=title;
        books[index].pageCount = pageCount;
    }
    
    return NextResponse.json(books[index])
    // else if (index === null || index === undefined || index >= books.length){
    //     return Response.json(`Couldn't find comment with ID:${params.id}  please enter valid ID`, {
    //         status:404,
    //         headers:{
    //             'Content-Type':'application/json'
    //         }})
    // }


}