import React from "react";
import { CheckCircle } from "lucide-react";
import { getTimeAgo } from "../HelperFunctions";

const VideoCard = ({ info }) => {
  if (!info || !info.snippet) return null;

  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, publishedAt, title } = snippet;

  return (
    <div className="bg-[#0f0f0f] rounded-xl hover:bg-[#1f1f1f] transition-all duration-200 cursor-pointer">
      {/* ✅ Thumbnail section (YouTube-like 16:9 ratio) */}
      <div className="relative aspect-video rounded-xl ">
        <img
          src={thumbnails?.medium?.url}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-200 hover:scale-[1.05]"
        />
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-xs px-1.5 py-0.5 rounded-md">
          12:34
        </span>
      </div>

      {/* ✅ Video info */}
      <div className="flex mt-3 px-2 pb-3">
        {/* Channel profile placeholder */}
        <div className="w-10 h-10 rounded-full bg-gray-700 mr-3 shrink-0"></div>

        {/* Text info */}
        <div className="flex flex-col text-white overflow-hidden">
          <h3 className="text-[15px] font-medium leading-tight line-clamp-2">
            {title}
          </h3>
          <p className="text-[#aaaaaa] text-sm flex items-center gap-1 mt-1">
            {channelTitle}
            <CheckCircle className="w-3 h-3 text-[#aaaaaa]" />
          </p>
          <p className="text-[#aaaaaa] text-xs mt-0.5">
            {statistics?.viewCount
              ? `${Number(statistics.viewCount).toLocaleString()} views`
              : "No views"}{" "}
            • {getTimeAgo(publishedAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export const AdVideoCart = ({ info, label = "Sponsored", color = "gold" }) => {
  return (
    <div className="relative p-1 rounded-xl overflow-visible border border-gray-700">
      {/* ✅ Label sits above everything */}
      <span
        className="absolute top-2 left-2 text-xs font-semibold px-2 py-1 rounded-md z-10"
        style={{ backgroundColor: color, color: "black" }}
      >
        {label}
      </span>

      {/* VideoCard inside */}
      <VideoCard info={info} />
    </div>
  );
};


export default VideoCard;
