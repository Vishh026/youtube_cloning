import React from "react";

const ChatMessage = ({ chats }) => {
  return (
    <div className="flex items-start gap-3 px-3 py-1 hover:bg-zinc-900 transition-all rounded-md">
      <img
        src="https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_120dp.png"
        alt="avatar"
        className="w-7 h-7 rounded-full mt-1"
      />
      <div className="flex flex-col">
        <p className="text-sm font-semibold text-white">{chats.user}</p>
        <p className="text-sm text-gray-300">{chats.chat}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
