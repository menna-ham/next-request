import { NextRequest } from "next/server";
import { books } from "./data";

//Normal GET Request
// export async function GET()
// {
//     return Response.json(books);
// }

//Updated Request
// export async function GET (request:NextRequest){
//     let serParams = request.nextUrl.searchParams;
//     let query = serParams.get('q')||''
//     let fileterdBooks = query? books.find(b=>b.title.includes(query)):books

//     return Response.json(fileterdBooks)
// }


export async function GET(request:NextRequest){
    let serPar = request.nextUrl.searchParams;
    let quers = serPar.getAll('quer')||''
    console.log(quers);
    
    return Response.json(books)
}