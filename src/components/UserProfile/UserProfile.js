import React from 'react'
import "./UserProfile.css";

function UserProfile() {
    return (
        <div className="user-profile-wrapper">
            <div className="profile-card">
                <img
                    src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                    alt="CoverImage"
                    className="cover-image"
                />
                <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                    alt="ProfileImage"
                    className="profile-image"
                />
                <div className='profile-user'>
                    <h2 className='user-name'> Sarah Wood</h2>

                    <p className='user-description'>
                        Sarah Wood is co-founder and COO of video ad tech company,<br />
                    </p>
                    <p className='user-description1'> London . England . United Kingdom . 234 friends

                    </p>
                    <div className="user-button">
                        <button className="btn btn-primary">Add Friend</button>
                        <button className="btn btn-outline-primary">Visit Website</button>
                    </div>

                </div>
            </div>
        </div>
    );

}

export default UserProfile;






