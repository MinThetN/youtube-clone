import { Button } from "@heroui/react";
import { VideoCard } from "./video-card";
export default function Videos() {
    return (
      <div className="grid grid-cols-4 gap-4">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    );
  }