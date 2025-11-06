import React from "react";
import { getTimeAgo } from "../HelperFunctions";

const VerticalCart = ({ video }) => {
  const { snippet, statistics } = video;
  if (!snippet) return null;

  const { channelTitle, thumbnails, publishedAt, title, description } = snippet;

  return (
    <div className="flex gap-4 p-3 rounded-xl hover:bg-zinc-900 transition-all duration-200 cursor-pointer">
      {/* Thumbnail */}
      <div className="flex shrink-0">
        <img
          src={thumbnails?.medium?.url}
          alt={title}
          className="w-[360px] h-[200px] rounded-xl object-cover"
        />
      </div>

      {/* Video Details */}
      <div className="flex flex-col justify-start w-full">
        {/* Title */}
        <h2 className="text-lg font-semibold line-clamp-2 mb-1">{title}</h2>

        {/* Channel + Views */}
        <div className="text-sm text-zinc-400 flex gap-2 items-center mb-2">
          <span>{channelTitle}</span>
          <span>•</span>
          <span>
            {statistics?.viewCount
              ? `${Number(statistics.viewCount).toLocaleString()} views`
              : "No views"}
          </span>
          <span>•</span>
          <span>{getTimeAgo(publishedAt)}</span>
        </div>

        {/* Description */}
        <p className="text-zinc-400 text-sm line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default VerticalCart;
