import Image from "next/image";
import Videos from "./ui/components/videos";
import { VideoCreateForm } from "./ui/components/video-create";

export default function Home() {
  return (
    <div className="p-5">
      <VideoCreateForm />
      <Videos />
    </div>
  );
}
