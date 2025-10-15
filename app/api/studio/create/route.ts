import { NextResponse } from "next/server";
import db from "@/lib/prisma";

export async function POST(request: Request) {
    const body = await request.json();
    const {userid,tracktype,title} = body;
    if(!userid || !tracktype || !title){
        return NextResponse.json({error:"Missing required fields"},{status:400});
    }
    try{
        const studio = await db.studioSession.create({
            data:{
                hostId: userid,
                tracktype: tracktype,
                title: title
            }
        })
        return NextResponse.json({studio},{status:201});

    }
    catch(err){
        return NextResponse.json({error:"Database error",err},{status:500});
    }

}