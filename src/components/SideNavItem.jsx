import React from "react";
import "./SideNavItem.css";

function SideNavItem({ active, text, Icon }) {
  return (
    <div className={`sideNavItems ${active && "sideNavItems--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SideNavItem;
