import React from 'react'
import "./FeedInfoCard.css";


function FeedInfoCard() {
    return (
        <div className='info-container'>
            <div>
            <h3>Recent</h3>
            <ul className='info-list'>
                <li>
                    <span>#javascript</span>
                </li>
                <li>
                    <span>Moblie Trends conference 2021</span>

                </li>
                <li>
                    <span>Freelance Developers</span>

                </li>
                
            </ul>
            </div>
            <div>
            <h3>Groups</h3>
            <ul className='info-list'>
                <li>
                    <span>#javascript</span>
                </li>
                <li>
                    <span>Moblie Trends conference 2021</span>

                </li>
                <li>
                    <span>Freelance Developers</span>

                </li>
                
            </ul>
            </div>
            <div>
            <h3>Subscriptions</h3>
            <ul className='info-list'>
                <li>
                    <span>Programming with Mosh</span>
                </li>
                <li>
                    <span>E-learning Bridge</span>

                </li>
                <li>
                    <span>Clever Programmer</span>

                </li>
                
            </ul>
            </div>
        </div>
    )
}

export default FeedInfoCard;