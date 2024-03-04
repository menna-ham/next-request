import { comments } from "./data";
import { type NextRequest } from "next/server";

//normal get
// export async function GET(){
//     return Response.json(comments);
// }

//Query params
export async function GET(request:NextRequest){
    let searchParams = request.nextUrl.searchParams;
    let query= searchParams.get('query')||'';
    let filteredComments = query?comments.filter((c)=>c.text.includes(query)):comments;

    return Response.json(filteredComments);
}

//Post Data
// 1.getting the Body of Request:Data 'request'
// 2.converting request 'Body of Request to json 
// 3.creating new object to insert the new data an object
// 4.pushing the new object to current
// 5.returning successful response of posting the data
export async function POST (request:Request){
    const comment = await request.json();
    const newcomment = {
        id: comments.length+1,
        text: comment.text,
    }
    comments.push(newcomment);
    return new Response(JSON.stringify(newcomment),{
        headers:{
            'Content-Type':'application/json'
        },
        status:201,
    })
}


