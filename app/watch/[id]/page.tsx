"use client"

import { Avatar, Button } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

 export default function DetailVideo({ params } : any){

    const { isPending, error, data } = useQuery({
        queryKey: ['singleVideo'],
        queryFn: () =>
          fetch(`/api/video/${params.id}`).then((res) =>
            res.json(),
          ),
      })
    
      if (isPending) return 'Loading...'
    
      if (error) return 'An error has occurred: ' + error.message
    

    return (
    
        <div className="p-5 flex gap-2 "> 
            {/* DetailVideo {params.id} use params.id to set dynamic */}
            
            {/* video */}

            <Button className="" as={Link} href='/' passHref> Back </Button>

            <div className="w-9/12">
                <div className="">
                    <iframe 
                    // aspect-video to make the video card aspect ratio
                    className="aspect-video w-full rounded-xl"
                    src={`https://www.youtube.com/embed/${data.videoId}`}
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
            </div>

            {/* comments */}
            <div className=""> comments </div>

        </div>
    );
 }