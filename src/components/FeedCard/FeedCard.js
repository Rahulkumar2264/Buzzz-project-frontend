import React, { useEffect, useState } from "react";
import "./FeedCard.css";
import placeholder from './profile.jpeg';

function FeedCard() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetchPostData();
  }, []);

  const fetchPostData = async () => {
    let result = await fetch("http://localhost:5000/api/post", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const post = await result.json();
    setPostData(post);
  };

  return (
    <div className="post-wrapper">
      <div className="sort">
        <span>
          <h5>Sort By:</h5>
        </span>
        <select name='Sort' id='Sort' required>
                <option value={'Top'}>Top</option>
                <option value={'Down'}>Down</option>
        </select>
      </div>
      {postData &&
        postData.map((item) => {
          return (
            <div className="card-post" key={item._id}>
              <div className="card-header">
                <img
                  src={item?.createdBy?.profile_image || placeholder}
                  className="card-profile-img"
                  alt=""
                />
                <div className="profile-name">
                  <span>{item?.createdBy?.username}</span>
                  <span className="date-time">{(new Date(item.createdAt)).toDateString()}</span>
                </div>
              </div>
              <p className="card-text">{item.text}</p>
              {item.image_url ? (
                <img src={item.image_url} className="post-img" alt="" />
              ) : null}
              <div className="comment-wrapper">
                <img
                  src={item?.createdBy?.profile_image || placeholder}
                  className="post-img-1"
                  alt=""
                />

                <input
                  type="text"
                  placeholder="Write a comment..."
                  name="comment"
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default FeedCard;
