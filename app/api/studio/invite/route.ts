
import db from "@/lib/prisma";

export default async function invite(req:Request){
    const data = await req.json();
    const useremail = data.email;
    const sessionId = data.sessionId;
        
    const invite_link = "sdaawdaw";
    const guest = await db.guest.create({
        data:{
            email:useremail,
            sessionId:sessionId,
            inviteLink:invite_link

        }
    })

}