import React from "react";
import { IoIosSend } from "react-icons/io";
import Message from "./Message";
import { useDispatch, useSelector } from "react-redux";
import User from "./User";
const MessageContainer = () => {
   const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.userReducer)
  return (
   <div className="h-screen w-full flex flex-col">
          <div className="p-3 border-b border-b-white/10">
            <User userDetails={selectedUser} />
          </div>

      <div className="h-full overflow-y-auto p-3">
       <Message/>
      </div>

      <div className="w-full p-3 flex gap-2">
        <input
          type="text"
          placeholder="Type here..."
          className="input input-bordered input-primary w-full"
        />
        <button className="btn btn-square btn-outline btn-primary">
          <IoIosSend />
        </button>
      </div>
    </div>
  );
};

export default MessageContainer;