import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./Sidebar.css";
import SideNavItem from "./SideNavItem";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MoreHorizOutlined from "@material-ui/icons/MoreHoriz";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon />
      <SideNavItem active Icon={HomeIcon} text="Home" />
      <SideNavItem Icon={SearchIcon} text="Explore" />
      <SideNavItem Icon={NotificationsNoneIcon} text="Notifications" />
      <SideNavItem Icon={MailOutlineIcon} text="Messages" />
      <SideNavItem Icon={TurnedInNotIcon} text="Bookmarks" />
      <SideNavItem Icon={ListAltIcon} text="Lists" />
      <SideNavItem Icon={PersonOutlineIcon} text="Profile" />
      <SideNavItem Icon={MoreHorizOutlined} text="More" />
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
