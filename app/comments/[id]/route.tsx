import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET( request:Request, {params}:{params:{id:string}}){
    let comment = comments.find((c)=>c.id === parseInt(params.id))

    if(parseInt(params.id)>comments.length){
        redirect('/comments');
    }
    
    if(comment){
        return Response.json(comment)
    }else{
        return Response.json('Failed to find that item')
    }
    
}

// Updating comment text
// 1.getting the body of request and extrating property to be updated
// 2.getting the index of updated object
// 3.update the comment
export async function PATCH (request:Request, {params}:{params:{id:string}}){
    let body = await request.json();
    let {text} = body;
    let index = comments.findIndex((c)=>c.id === parseInt(params.id));
    if (index){
        comments[index].text = text;
        return Response.json(comments[index]);
    }else if (index === null || index === undefined || index >= comments.length){
        return Response.json(`Couldn't find comment with ID:${params.id}  please enter valid ID`, {
            status:404,
            headers:{
                'Content-Type':'application/json'
            }})
    }
}


// Deleting comment from comments

export async function DELETE(request:Request, {params}:{params:{id:string}}){
    let index = comments.findIndex((c)=>c.id === parseInt(params.id));
    let deletedComment = comments[index]
    comments.splice(index,1);
    return Response.json(comments)
}