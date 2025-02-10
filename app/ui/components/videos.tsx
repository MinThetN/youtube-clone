"use client"
import { VideoCard } from "./video-card";
import { useQuery } from '@tanstack/react-query'

export default function Videos() {
    const { isPending, error, data } = useQuery({
        queryKey: ['videoData'],
        queryFn: () =>
          fetch('/api/video').then((res) =>
            res.json(),
          ),
      })
    
      if (isPending) return 'Loading...'
    
      if (error) return 'An error has occurred: ' + error.message

    return (
      <div className="grid grid-cols-3 gap-3 mt-4">

        {data.map((video: any) => (
            <VideoCard key={video.id} video = {video} />
        )) }

      </div>
    );
  }