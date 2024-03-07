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

    let serParams = request.nextUrl.searchParams;
    let titleQ=serParams.get('title')||''
    let pageCountQ=serParams.get('pageCount')||''
    let Quer=serParams.get('quer')||''

    if(Quer){
        let filtered = books.filter(b=>b.title.includes(Quer))
        return new Response(JSON.stringify(filtered))
    }
    else if(titleQ&&pageCountQ){
        let filtered = books.filter(b=>b.title.includes(titleQ)&&b.pageCount===parseInt(pageCountQ))
        return new Response(JSON.stringify(filtered))
    }else{
        return Response.json(books)
    }


}