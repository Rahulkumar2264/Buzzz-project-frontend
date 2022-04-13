import React, { useEffect } from "react";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import "./Header.css";
import placeholder from './profile.jpeg';
import {setProfileInfo} from '../../redux/user/user.action';

function Header(props) {
  useEffect(()=>{
    getUserProfile();
  },[]);

  
  async function getUserProfile(){
    const {user_id} = props.user;
    const response = await fetch(`http://localhost:5000/api/profile/${user_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    });
    const profile = await response.json();
    props.setProfileInfo(profile.data);
  }

  return (
    <div className="nav-header">
      <img
        className="applogo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6o0ZdEbUTXMqyDY04csGud1Z2bGUaQX7fYnlw3BSSXx6HY_xl0uHHFkBMpK4bIYM-1uM&usqp=CAU"
        alt=""
      />
      <ul className="menu-list">
        <li className="user-profile">
          <img
            src={props.user?.profile_image || placeholder}
            alt=""
          />
          <span>{props.user?.username}</span>
        </li>
        <li className="message">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M924.3 338.4a447.57 447.57 0 0 0-96.1-143.3 443.09 443.09 0 0 0-143-96.3A443.91 443.91 0 0 0 512 64h-2c-60.5.3-119 12.3-174.1 35.9a444.08 444.08 0 0 0-141.7 96.5 445 445 0 0 0-95 142.8A449.89 449.89 0 0 0 65 514.1c.3 69.4 16.9 138.3 47.9 199.9v152c0 25.4 20.6 46 45.9 46h151.8a447.72 447.72 0 0 0 199.5 48h2.1c59.8 0 117.7-11.6 172.3-34.3A443.2 443.2 0 0 0 827 830.5c41.2-40.9 73.6-88.7 96.3-142 23.5-55.2 35.5-113.9 35.8-174.5.2-60.9-11.6-120-34.8-175.6zM312.4 560c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.4 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.5 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.5 48-47.9 48z"></path>
          </svg>
        </li>
        <li className="profile">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 640 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z"></path>
          </svg>
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({setProfileInfo}, dispatch);
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  Header
);