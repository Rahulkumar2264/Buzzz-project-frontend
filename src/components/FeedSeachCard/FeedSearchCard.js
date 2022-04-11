import React, { useState } from "react";
import "./FeedSearchCard.css";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";

function FeedSearchCard(props) {
  const [postText, setPostText] = useState("");

  const selectMedia = () => {
    const myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "571421782896433",
        uploadPreset: "my_preset",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
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
        image_url: "",
        video_url: "",
        comments: [],
        createdBy: props.user?.user?.user_id,
      };
     
      await fetch("http://localhost:5000/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(postObj),
      });
      setPostText('');
    }
  };

  return (
    <div>
      <div className="search-wrapper">
        <img
          src="https://i.picsum.photos/id/822/200/200.jpg?hmac=pXgRn-rbZIan3GYBv9xCVsdyt_Kzq5Q_d0AbLnzeT3k"
          alt=""
        />
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
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  FeedSearchCard
);