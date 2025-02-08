import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, {params} : any) {

    const videoDetail = await db.video.findFirst({
        where: {
            videoId: params.videoId,
        }
    })
    return NextResponse.json(videoDetail);
}