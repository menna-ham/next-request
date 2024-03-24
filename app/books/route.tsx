import { NextRequest } from "next/server";
import { books } from "./data";
import { useRouter } from "next/navigation";

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

//search with title & pageCount 
export async function GET(request:NextRequest){
    let router = useRouter()
    // let RoutQu= router.

    let serParams = request.nextUrl.searchParams;
    let titleQ=serParams.get('title')||''
    let pageCountQ=serParams.get('pageCount')||''
    let Quer=serParams.get('quer')||'';
    let autherQ = serParams.get('authors')||'';

    let filtered=[]
    let exp = titleQ|| pageCountQ||Quer||autherQ

    switch (exp) {
        case Quer:
            filtered = books.filter(b=>b.title.includes(Quer))
            return new Response(JSON.stringify(filtered))
        break;
        case titleQ:
            filtered = books.filter(b=>b.title.includes(titleQ))
            return new Response(JSON.stringify(filtered))
        break;
        case pageCountQ:
            filtered = books.filter(b=>b.pageCount===parseInt(pageCountQ))
            return new Response(JSON.stringify(filtered))
        break;
        case autherQ:
            console.log(autherQ)
            filtered = books.filter(b=>b.authors.includes(autherQ))
            return Response.json(filtered)
        break;
        case autherQ&&pageCountQ&&titleQ:
            filtered = books.filter(b=>b.title.includes(titleQ)&&b.pageCount===parseInt(pageCountQ)&&b.authors.includes(autherQ))
            return Response.json(filtered)
        break;
        case autherQ&&pageCountQ:
            filtered = books.filter(b=>b.pageCount===parseInt(pageCountQ)&&b.authors.includes(autherQ))
            console.log(filtered)
            return Response.json(filtered)
        break;
        case autherQ&&titleQ:
            filtered = books.filter(b=>b.title.includes(titleQ)&&b.authors.includes(autherQ))
            return Response.json(filtered)
        break;
        case pageCountQ&&titleQ:
            filtered = books.filter(b=>b.title.includes(titleQ)&&b.pageCount===parseInt(pageCountQ))
            return Response.json(filtered)
        break;
    
        default:
            return Response.json(books)
            break;
    }

}