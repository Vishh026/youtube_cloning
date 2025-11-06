import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/reducers/AppSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_SINGLE_VIDEO } from "../Constant";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [singleVideo, setSingleVideo] = useState(null);

  const getSingleVideoData = async () => {
    const data = await fetch(YOUTUBE_SINGLE_VIDEO(videoId));
    const json = await data.json();

    setSingleVideo(json.items[0]);
  };

  useEffect(() => {
    getSingleVideoData();
    dispatch(closeMenu());
  }, [videoId]);

  if (!singleVideo) return <div className="text-white">Loading...</div>;

  const { snippet, statistics } = singleVideo;
  const { title, channelTitle, description, publishedAt } = snippet;
  const { viewCount, likeCount } = statistics;

  return (
    <div className="bg-[#0f0f0f] text-white flex flex-col lg:flex-row gap-6 px-8 py-6">
      {/* LEFT SECTION */}
      <div className="flex-1 min-w-[60%] max-w-[70%]">
        {/* Video Player */}
        <div className="w-full aspect-video rounded-2xl overflow-hidden">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div>
          {/* Video Title */}
          <h1 className="text-xl font-semibold mt-4">{title}</h1>

          {/* Channel + Like section */}
          <div className="flex justify-between items-center mt-4 flex-wrap gap-3">
            {/* Channel info */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
              <div>
                <h3 className="font-medium">{channelTitle}</h3>
                <p className="text-sm text-gray-400">3.9K subscribers</p>
              </div>
              <button className="bg-white text-black font-semibold px-4 py-1.5 rounded-full ml-4">
                Subscribe
              </button>
            </div>

            {/* Like / Share */}
            <div className="flex items-center gap-3">
              <button className="bg-[#272727] px-4 py-1.5 rounded-full flex items-center gap-2">
                👍 {likeCount ? Number(likeCount).toLocaleString() : 0}
              </button>
              <button className="bg-[#272727] px-4 py-1.5 rounded-full">
                Share
              </button>
            </div>
          </div>

          {/* Description box */}
          <div className="bg-[#272727] mt-5 p-4 rounded-xl text-gray-200 text-sm whitespace-pre-line">
            <div>
              <span className="font-semibold">
                {Number(viewCount).toLocaleString()} views
              </span>{" "}
              • {new Date(publishedAt).toDateString()}
            </div>
            <div className="mt-2">
              {description?.length > 250
                ? description.slice(0, 250) + "..."
                : description}
            </div>
          </div>

          {/* working on comments */}
          <div className="p-4 ">
            <CommentContainer />
          </div>
        </div>
      </div>

      {/* RIGHT SECTION (future recommended videos) */}
     <LiveChat />
    </div>
  );
};

export default WatchPage;
