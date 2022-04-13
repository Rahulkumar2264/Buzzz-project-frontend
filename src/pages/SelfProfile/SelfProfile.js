import React from 'react'
import "./SelfProfile.css";
import Header from '../../components/Header/Header';
import FeedSuggestionCard from '../../components/FeedSuggestionCard/FeedSuggestionCard';
import UserEditProfile from '../../components/UserEditProfile/UserEditProfile';


function EditProfile() {
    return (
        <div className='selfprofile-page-wrapper'>
             <Header />
             <UserEditProfile />
             <FeedSuggestionCard />
           
        </div>
           
    )

}

export default EditProfile;