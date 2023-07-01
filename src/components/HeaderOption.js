import React from "react";
import "./HeaderOption.css";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const HeaderOption = ({ title, Icon, onClick, avatar }) => {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" src={user?.photoUrl}>
          {user?.displayName?.substring(0, 1)}
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
