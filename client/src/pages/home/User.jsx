import React from "react";

function User({userDetails}) {
  return (
    <div className="flex gap-3 items-center p-2 hover:bg-base-200 rounded-lg cursor-pointer transition">
      <div className="relative w-14 h-14">
        {/* <div className="avatar online">
  <div className="w-24 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div> */}
<div className="avatar online">
  <div className="w-14 rounded-full">
    <img src={userDetails?.avatar} />
  </div>
</div>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-semibold text-base-content">{userDetails?.username}</span>
      </div>
    </div>
  );
}

export default User;
