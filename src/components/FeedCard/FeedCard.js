import React ,{useEffect} from "react";
import "./FeedCard.css";
import placeholder from './profile.jpeg';
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import {fetchPost} from "../../redux/post/post.action"

function FeedCard(props) {
  useEffect(()=>{
    props.fetchPost();

  },[])
  return (
    <div className="post-wrapper">
      {props?.post?.post &&
        props?.post?.post.map((item) => {
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


const mapStateToProps = (state) => ({
  post: state.post
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchPost}, dispatch);
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  FeedCard
);
