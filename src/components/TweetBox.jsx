import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./TweetBox.css";
import db from "../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImageUrl, setTweetImageUrl] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Shahrear Bin Amin",
      username: "@shahrear",
      verified: true,
      text: tweetMessage,
      image: tweetImageUrl,
      avatar:
        "https://avatars0.githubusercontent.com/u/36158654?s=460&u=63c6966bac3b838ea943625aa39fdfeedb071cc8&v=4",
    });

    setTweetMessage("");
    setTweetImageUrl("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://avatars0.githubusercontent.com/u/36158654?s=460&u=63c6966bac3b838ea943625aa39fdfeedb071cc8&v=4" />
          <input
            placeholder="What's happening?"
            type="text"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          value={tweetImageUrl}
          onChange={(e) => setTweetImageUrl(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
