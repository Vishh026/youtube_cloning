import React, { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChats } from "./utils/reducers/LivechatSlice";
import { Live_Chat } from "../Constant";
import { generateRandomString, generateRandomUsername } from "../HelperFunctions";

const LiveChat = () => {
  const liveMsg = useSelector((store) => store.chatReducer.messages);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const chatRef = useRef(null);



  // Simulated incoming messages (every 2s)
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addChats({
          chat: generateRandomString(20),
          user: generateRandomUsername()
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, [dispatch]);

  // Auto scroll when new message arrives
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [liveMsg]);

  // Handle user message send
  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addChats({ chat: input, user: "You" }));
    setInput("");
  };

  return (
    <div className="w-full flex flex-col bg-[#1e1e1e] rounded-xl px-4 pt-3 pb-2 shadow-md border border-zinc-800 h-[32rem]">
      <h2 className="text-white font-semibold mb-2 text-[15px] tracking-wide">
        Live Chat
      </h2>

      {/* Chat container */}
      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto space-y-2 pr-2 no-scrollbar"
      >
        {liveMsg.map((msg, index) => (
          <ChatMessage key={index} chats={msg} />
        ))}
      </div>

      {/* Message input */}
      <form onSubmit={handleSend} className="flex mt-2 gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add your message..."
          className="flex-1 text-white text-sm bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 outline-none"
        />
        <button
          type="submit"
          className="text-white bg-blue-600 px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
