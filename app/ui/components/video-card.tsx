import { Avatar, Button, Link } from "@heroui/react";

export function VideoCard() {
    return (
        <div className="border-2 p-3 rounded-2xl border-gray-400 hover:bg-gray-200 transition delay-100">
            <div className="">
                <iframe 
                // aspect-video to make the video card aspect ratio
                className="aspect-video w-full rounded-xl"
                src="https://www.youtube.com/embed/hIwGBOexa5w?si=BtDyxzvSjt7oz-UM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>
            </div>

            <div className=" flex gap-3 mt-3">
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                <div className="">
                    <h6 className="font-bold">Jhon doe</h6>
                    <h6>Min Thet Naung</h6>

                    <div className="flex gap-3 text-sm">
                        <h6 className="text-gray-500">1M views</h6>
                        <p className="text-gray-500">5 hours ago</p>
                    </div>
                </div>
            </div>
            <div className="bg-slate-300 w-full">
                <Button as={Link} href={`/watch/3`}> Watch </Button>
            </div>
        </div>
    );
}
