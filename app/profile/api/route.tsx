import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";
import react from "react";

export async function GET(request:NextRequest)
{
    let requestHeaders = new Headers(request.headers);
    console.log(requestHeaders.get('Authorization'))
    let headList =headers();
    console.log(headList.get('Authorization'))
    ///////////////////////////////////////

    cookies().set('ResultsPerPage','3')

    
    return new Response('Profile API',{
        headers:{
            'set-cookies':'theme=dark'
        }
    })
}