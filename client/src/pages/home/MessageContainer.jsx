import React from "react";
import { IoSend } from "react-icons/io5";
import Message from "./Message";

const MessageContainer = () => {
  return (
    <div className="w-full h-[calc(100vh-4rem)] flex flex-col justify-between p-4 bg-base-100 shadow-sm">
      {/* Message List */}
      <div className="flex flex-col gap-2 overflow-y-auto">
        <Message />
        
      </div>

      {/* Message Input */}
      <div className="w-full p-3 flex gap-2 mt-2">
        <input
          type="text"
          placeholder="Type here..."
          className="input input-bordered input-primary w-full bg-base-200 text-sm"
        />
        <button className="btn btn-square btn-outline btn-primary">
          <IoSend />
        </button>
      </div>
    </div>
  );
};

export default MessageContainer;
