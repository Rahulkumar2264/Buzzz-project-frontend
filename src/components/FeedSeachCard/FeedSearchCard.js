import React, { useState } from "react";
import "./FeedSearchCard.css";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import placeholder from "./profile.jpeg";
import {createPost} from "../../redux/post/post.action"

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
      props.createPost(postObj);

      setPostText("");
      setImageUrl("");
    }
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
  return bindActionCreators({
    createPost
  }, dispatch);
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  FeedSearchCard
);