import React from "react";
import UserSidebar from "./UserSidebar";
import MessageContainer from "./MessageContainer";

const Home = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <UserSidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;