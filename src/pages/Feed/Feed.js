import React from 'react'
import "./Feed.css";
import FeedInfoCard from '../../components/FeedInfoCard/FeedInfoCard';
import FeedProfileCard from '../../components/FeedProfileCard/FeedProfileCard';
import FeedSearchCard from '../../components/FeedSeachCard/FeedSearchCard';
import Header from '../../components/Header/Header';
import FeedContactCard from '../../components/FeedContactCard/FeedContactCard';
import FeedSuggestionCard from '../../components/FeedSuggestionCard/FeedSuggestionCard';
import FeedCard from '../../components/FeedCard/FeedCard';


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