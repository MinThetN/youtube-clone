import Image from "next/image";
import Videos from "./ui/components/videos";
import { VideoCreateForm } from "./ui/components/video-create";

export default function Home() {
  return (
    <div className="p-5 flex">
      <div className="flex-1 mr-5"> {/* flex-1 to take less space */}
        <VideoCreateForm />
      </div>
      <div className="flex-3"> {/* flex-3 to take more space */}
        <Videos />
      </div>
    </div>
  );
}
