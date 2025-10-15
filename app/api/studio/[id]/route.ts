import { NextResponse } from "next/server";
import db from "@/lib/prisma";
interface studioinfo{
    id: string
}
export default async function studioinfo(params:studioinfo){
    const {id} = params;
    const studio = await db.studioSession.findUnique({
        where:{
            id:id
        }
    })
    return NextResponse.json({studio},{status:200});

}