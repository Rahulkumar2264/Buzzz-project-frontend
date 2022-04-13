import React from "react";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import "./FeedContactCard.css";

function FeedContactCard(props) {
  return (
    <div>
      <div className="contact-wrapper">
        <h3>Contacts</h3>
        <ul className="contact-list">
          <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3Jt5pMttgmq975WH28mTkp4w1wlsFwVQpA&usqp=CAU"
              alt=""
            />
            <span>Henry Purcell</span>
          </li>
          <li>
            <img
              src="https://i.picsum.photos/id/822/200/200.jpg?hmac=pXgRn-rbZIan3GYBv9xCVsdyt_Kzq5Q_d0AbLnzeT3k"
              alt=""
            />
            <span>Charles Darwin</span>
          </li>
          <li>
            <img
              src="https://i.picsum.photos/id/822/200/200.jpg?hmac=pXgRn-rbZIan3GYBv9xCVsdyt_Kzq5Q_d0AbLnzeT3k"
              alt=""
            />
            <span>Charles Darwin</span>
          </li>
          <li>
            <img
              src="https://i.picsum.photos/id/822/200/200.jpg?hmac=pXgRn-rbZIan3GYBv9xCVsdyt_Kzq5Q_d0AbLnzeT3k"
              alt=""
            />
            <span>Charles Darwin</span>
          </li>
          <li>
            <img
              src="https://i.picsum.photos/id/822/200/200.jpg?hmac=pXgRn-rbZIan3GYBv9xCVsdyt_Kzq5Q_d0AbLnzeT3k"
              alt=""
            />
            <span>Charles Darwin</span>
          </li>
          <li>
            <img
              src="https://i.picsum.photos/id/822/200/200.jpg?hmac=pXgRn-rbZIan3GYBv9xCVsdyt_Kzq5Q_d0AbLnzeT3k"
              alt=""
            />
            <span>Charles Darwin</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  FeedContactCard
);
