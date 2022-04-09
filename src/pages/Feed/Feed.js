import React from 'react'
import "./Feed.css";
import FeedInfoCard from '../../Components/FeedInfoCard/FeedInfoCard';
import FeedProfileCard from '../../Components/FeedProfileCard/FeedProfileCard';
import FeedSearchCard from '../../Components/FeedSeachCard/FeedSearchCard';
import Header from '../../Components/Header/Header';
import FeedContactCard from '../../Components/FeedContactCard/FeedContactCard';
import FeedSuggestionCard from '../../Components/FeedSuggestionCard/FeedSuggestionCard';
import FeedCard from '../../Components/FeedCard/FeedCard';


function Feed() {
    return (
        <div className='feed-page-wrapper'>
             <Header />
             <FeedProfileCard />
             <FeedInfoCard/>
             <FeedSearchCard />

             <FeedContactCard />
             <FeedSuggestionCard />
             <FeedCard/>


           
        </div>
           

    )

}

export default Feed;