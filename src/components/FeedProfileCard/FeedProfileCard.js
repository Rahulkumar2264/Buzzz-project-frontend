import React from "react";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import "./FeedProfileCard.css";
import profile_image from "./profile.jpeg";

function FeedProfileCard(props) {
  return (
    <div className="card">
     <div className="cover-img" />
      <img className="profile-img"
        src={props.user.profile_image||profile_image}
        alt=""
      />
      <div className="card-body">
        <h4 className="card-title">{props.user.username}</h4>
        <p className="card-text">{props.user.profile_title}</p>
        <p className="profileviews-wrapper">
          <div className="profileviews">
            <span>234</span>
            <span>Profile View </span>
            <a href="/selfProfile">Edit Profile</a>
          </div>
          <div className="postviews">
            <span>10</span>
            <span>Post</span>
            <a href="/profile">Add Friend </a>

          </div>
        </p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user:state.user
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  FeedProfileCard
);

