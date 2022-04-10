import React from "react";
import "./FeedProfileCard.css";
import profile_placeholder from "../../images/profile-placeholder.png";

function FeedProfileCard() {
  return (
    <div className="card">
     <img className="cover-img"
        src="https://i.picsum.photos/id/822/200/200.jpg?hmac=pXgRn-rbZIan3GYBv9xCVsdyt_Kzq5Q_d0AbLnzeT3k"
        alt=""
      />
      <img className="profile-img"
        src="https://i.picsum.photos/id/822/200/200.jpg?hmac=pXgRn-rbZIan3GYBv9xCVsdyt_Kzq5Q_d0AbLnzeT3k"
        alt=""
      />
      <div className="card-body">
        <h4 className="card-title">Shekhar Agarwal</h4>
        <p className="card-text">Newly Recruit at TTN</p>
        <p className="profileviews-wrapper">
          <div className="profileviews">
            <span>234</span>
            <span>Profile Views</span>
          </div>
          <div className="postviews">
            <span>10</span>
            <span>Post</span>
          </div>
        </p>
      </div>
    </div>
  );
}

export default FeedProfileCard;
