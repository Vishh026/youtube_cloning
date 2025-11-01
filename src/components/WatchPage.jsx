import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/reducers/AppSlice";
import { useSearchParams } from "react-router-dom";
import {  YOUTUBE_SINGLE_VIDEO } from "../Constant";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const [singleVideo, setSingleVideo] = useState(null);

  const getSingleVideoData = async () => {
    const data = await fetch(
      YOUTUBE_SINGLE_VIDEO(videoId)
    );
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
    <div className="bg-[#0f0f0f] min-h-screen text-white flex flex-col lg:flex-row gap-6 px-8 py-6">
      {/* LEFT SECTION */}
      <div className="flex-1">
        {/* Video Player */}
        <div className="w-full aspect-video rounded-2xl overflow-hidden">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

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
            <button className="bg-[#272727] px-4 py-1.5 rounded-full">Share</button>
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
      </div>

      {/* RIGHT SECTION (future recommended videos) */}
      <div className="w-full lg:w-[30%]">
        <div className="bg-[#1a1a1a] rounded-xl p-4 text-gray-400">
          <p className="text-sm">Recommended videos will appear here soon 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
