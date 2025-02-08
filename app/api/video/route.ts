// GET -> Read
// POST -> Create
// PUT -> Update
// DELETE -> Delete

import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

//@method - GET
//@url - /api/video
export async function GET(req: NextRequest, res: NextResponse) {
    const videos = await db.video.findMany();
    return NextResponse.json(videos);
}

//@method - POST
//@url - /api/video
export async function POST(req: NextRequest, res: NextResponse) {
    const wow = await req.json(); // request data
    const toCreate = await db.video.create({
        data: {
            title: wow.title,
            description: wow.description,
            videoId: wow.videoId,
        },
    })
    return NextResponse.json(toCreate);

}