import React from "react";
import "./Sidebar.css";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const Sidebar = () => {
  const user = useSelector(selectUser);
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.fcQS3u3sJOMq0NNx9eCkZQHaEo&pid=Api&rs=1&c=1&qlt=95&h=180"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.displayName?.substring(0, 1)}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your Profile</p>
          <p className="sidebar__statNumber">312</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on Post</p>
          <p className="sidebar__statNumber">2,319</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("react.js")}
        {recentItem("redux.js")}
        {recentItem("frontenddeveloper")}
        {recentItem("reactdeveloper")}
      </div>
    </div>
  );
};

export default Sidebar;
