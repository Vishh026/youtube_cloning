import React from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";

const Comment = ({ data }) => {
    console.log(data);
    
  const { user, profilePic, time, text, likes } = data;
  return (
    <div>
      <div className="flex gap-3 py-3 text-gray-200">
        {/* Profile Picture */}
        <img
          className="rounded-full w-10 h-10 object-cover"
          alt="user"
          src={profilePic}
        />

        {/* Comment Content */}
        <div className="flex flex-col">
          {/* Username + Time */}
          <div className="flex items-center gap-2">
            <h1 className="text-sm font-semibold text-gray-100">{user}</h1>
            <span className="text-xs text-gray-400">{time}</span>
          </div>

          {/* Comment Text */}
          <p className="text-sm text-gray-300 leading-snug mt-1">
            {text}
          </p>

          {/* Actions */}
          <div className="flex items-center gap-4 mt-2 text-gray-400">
            <button className="flex items-center gap-1 hover:text-gray-200 transition-colors">
              <ThumbsUp size={16} /> <span className="text-xs">{likes}</span>
            </button>
            <button className="flex items-center gap-1 hover:text-gray-200 transition-colors">
              <ThumbsDown size={16} />
            </button>
            {/* <button className="text-xs font-medium hover:text-gray-200 transition-colors">
           {replies}
          </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
