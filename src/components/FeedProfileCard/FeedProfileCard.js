import React from 'react'
import "./FeedProfileCard.css";
import profile_placeholder from '../../Images/profile-placeholder.png';


function FeedProfileCard() {
    return (
        <>
            <div>
                <div class="card">
                    <img src='https://i.picsum.photos/id/822/200/200.jpg?hmac=pXgRn-rbZIan3GYBv9xCVsdyt_Kzq5Q_d0AbLnzeT3k' alt="" />
                    <div class="card-body">
                        <h5 class="card-title">Shekhar Agarwal</h5>
                        <p class="card-text">Newly Recruit at TTN</p>
                        <p className='profileviews-wrapper'>
                            <div className='profileviews'>
                                <span>
                                    234
                                </span>
                                <span>
                                  Profile Views
                                </span>

                            </div>
                            <div className='postviews'>
                                <span>
                                    10
                                </span>
                                <span>
                                  Post
                                </span>

                            </div>
                            </p>
                    </div>
                </div>
            </div>
       </>
    )
}

export default FeedProfileCard;