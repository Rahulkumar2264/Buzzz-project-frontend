import React from 'react'
import "./Profile.css";
import Header from '../../components/Header/Header';
import FeedSuggestionCard from '../../components/FeedSuggestionCard/FeedSuggestionCard';
import UserProfile from '../../components/UserProfile/UserProfile';


function Profile() {
    return (
        <div className='profile-page-wrapper'>
             <Header />
             <UserProfile/>
             <FeedSuggestionCard />
           
        </div>
           
    )

}

export default Profile;