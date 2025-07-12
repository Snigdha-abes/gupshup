import React from "react";
import { IoSearch } from "react-icons/io5";
import User from "./User";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserThunk } from "../../store/slice/user/user.thunk";

const UserSidebar = () => {
  const dispatch=useDispatch();
   const { otherUsers } = useSelector((state) => state.userReducer);
   console.log(otherUsers)
  const handleLogout=async()=>{
   await dispatch(logoutUserThunk());
  }
  return (
    <div className="max-w-[20em] w-full h-screen flex flex-col bg-base-100 border-r shadow-md">
      <h1 className="text-xl font-semibold px-4 py-3 border-b text-primary">
        GUP SHUP 💬
      </h1>
    
      <div className="p-3">
        <label className="input input-bordered flex items-center gap-2 rounded-md shadow-sm">
          <IoSearch className="text-gray-500" />
          <input
            type="text"
            className="grow outline-none"
            placeholder="Search"
          />
        </label>
      </div>

      <div className="h-full overflow-y-auto px-2 pb-4 space-y-2">
        {otherUsers?.map(userDetails=>{
          return(
            <User key={userDetails?._id} userDetails={userDetails} />
          )
        })}
       
      </div>

      <div className="flex items-center justify-between p-3 border-t bg-base-200">
        <div className="avatar online">
          <div className="w-10 rounded-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="profile"
              className="object-cover"
            />
          </div>
        </div>
        <button onClick={handleLogout} className="btn btn-primary btn-sm px-4">Logout</button>
      </div>
      
    </div>
    
  );
};

export default UserSidebar;
//6:33:32