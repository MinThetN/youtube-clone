import { Avatar, Button, Link } from "@heroui/react";

export function VideoCard({ video }: any) {
    return (
        <div className="border-2 p-3 rounded-2xl border-gray-400 hover:bg-gray-200 transition delay-100">

            {/* <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(video, null, 2)}</code>
            </pre> */}

            <div className="">
                <iframe 
                // aspect-video to make the video card aspect ratio
                className="aspect-video w-full rounded-xl"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>
            </div>

            <div className=" flex gap-3 mt-3">
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                <div className="">
                    <h6 className="font-bold">{video.title}</h6>
                    <h6>{video.description}</h6>

                    <div className="flex gap-3 text-sm">
                        <h6 className="text-gray-500">1M views</h6>
                        <p className="text-gray-500">5 hours ago</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-end">
                <Button className="" as={Link} href={`/watch/${video.videoId}`}> Watch </Button>
            </div>
        </div>
    );
}
