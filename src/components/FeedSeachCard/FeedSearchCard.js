import React, { useState } from "react";
import "./FeedSearchCard.css";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import placeholder from "./profile.jpeg";
import {setPost} from "../../redux/post/post.action"

function FeedSearchCard(props) {
  const [postText, setPostText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  
  const selectMedia = () => {
    const myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dvmtboeyl",
        uploadPreset: "my-uploads",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          //console.log("Done! Here is the image info: ", result.info);
          setImageUrl(result.info.url);
        }
      }
    );
    myWidget.open();
  };

  const submitPost = async (e) => {
    const key = e.keyCode;
    if (key === 13 && postText.length > 0) {
      const postObj = {
        text: postText,
        image_url: imageUrl,
        video_url: "",
        comments: [],
        createdBy: props.user?.user_id,
      };
      setPostText("");
      setImageUrl("");
      await fetch("http://localhost:5000/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(postObj),
      });
      fetchPostData();
    }
  };

  const fetchPostData = async () => {
    let result = await fetch("http://localhost:5000/api/post", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const posts = await result.json();
    console.log(posts);
    props.setPost(posts);
  };

  return (
    <div>
      <div className="search-wrapper">
        <img src={props?.user?.profile_image || placeholder} alt="" />
        <input
          className="search-field"
          type="text"
          placeholder="Start a post..."
          name="search"
          onKeyDown={submitPost}
          onChange={(event) => setPostText(event.target.value)}
          value={postText}
        />

        <span className="photo-logo" onClick={selectMedia}>
          {" "}
          Photo/Video
        </span>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  post: state.post
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({setPost}, dispatch);
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  FeedSearchCard
);