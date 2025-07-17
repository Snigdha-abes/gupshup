import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../../store/slice/user/user.slice";

function User({ userDetails }) {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.userReducer);

  const handleUserClick = () => {
    dispatch(setSelectedUser(userDetails));
  };

  return (
    <div
      onClick={handleUserClick}
      className={`flex gap-5 items-center hover:bg-gray-700 rounded-lg py-1 px-2 cursor-pointer ${
        userDetails?._id === selectedUser?._id ? "bg-gray-700" : ""
      }`}
    >
      <div className="avatar online">
        <div className="w-14 rounded-full">
          <img src={userDetails?.avatar} alt="avatar" />
        </div>
      </div>

      <div className="flex flex-col">
        <span className="text-lg font-semibold text-base-content">
          {userDetails?.username}
        </span>
      </div>
    </div>
  );
}

export default User;
