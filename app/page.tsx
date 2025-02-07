import { Button } from "@heroui/react";
import Image from "next/image";
import Videos from "./ui/components/videos";
import { VideoCreateForm } from "./ui/components/video-create";

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
      <VideoCreateForm />
      <Videos />
    </div>
  );
}
