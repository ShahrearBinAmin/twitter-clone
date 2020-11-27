import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Widget.css";

import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widget() {
  return (
    <div className="widget">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1332058849973506066"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Reuters"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.facebook.com/shahrear.bin.amin"}
          options={{ text: "#react tutorial", via: "ShahrearBinAmin" }}
        />
      </div>
    </div>
  );
}

export default Widget;
