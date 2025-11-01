import React, { useEffect, useState } from "react";
import VideoCart,{AdVideoCart} from "./VideoCart"
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOAPI } from "../Constant";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOAPI);
    const json = await data.json();
    setVideos(json.items || []);
  };

  return (
   <div className="w-full min-h-screen bg-[#0f0f0f] px-8 py-6">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {/* ✅ Example: Passing custom label and color */}
        {videos[0] && (
          <AdVideoCart
            info={videos[0]}
            label="Sponsored by Sheryians"
          />
        )}

        {/* ✅ Normal video cards */}
        {videos.slice(1).map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCart info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
