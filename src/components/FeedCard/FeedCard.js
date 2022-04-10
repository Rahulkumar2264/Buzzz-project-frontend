import React from 'react'
import "./FeedCard.css";


function FeedCard() {
    return (
        <div className='post-wrapper'>
            <div className='card-post'>
                <div className='card-header'>
                    <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202106/Gray_Man.jpg?TIM.pBR2amOelRvfmi4Xnqd2cOqL83JW&size=770:433" className="card-profile-img" alt="..." />
                    <div className='profile-name'>
                        <span>Ronald Oliver</span>
                        <span className='date-time'>November 16,2021</span>
                    </div>
                </div>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <img src="https://casiocdn.com/casio-v2/resource/temp/images/Artwork-home/oceanus_mobile.jpg" className="post-img" alt="..." />
                <div className="comment-wrapper">
                    <img src="https://i.picsum.photos/id/822/200/200.jpg?hmac=pXgRn-rbZIan3GYBv9xCVsdyt_Kzq5Q_d0AbLnzeT3k" className="post-img-1" alt="..." />

                    <input type="text" placeholder="Write a comment..." name="comment" />
                </div>
            </div>
            <div className='card-post'>
                <div className='card-header'>
                    <img src="https://nyulangone.org/images/doctors/h/hon/1376586065/man-hon-square.jpg" className="card-profile-img" alt="..." />
                    <div className='profile-name'>
                        <span>Ronald Oliver</span>
                        <span className='date-time'>November 16,2021</span>
                    </div>
                </div>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <img src="https://casiocdn.com/casio-v2/resource/temp/images/Artwork-home/oceanus_mobile.jpg" className="post-img" alt="..." />
                <div className="comment-wrapper">
                    <img src="https://i.picsum.photos/id/822/200/200.jpg?hmac=pXgRn-rbZIan3GYBv9xCVsdyt_Kzq5Q_d0AbLnzeT3k" className="post-img-1" alt="..." />

                    <input type="text" placeholder="Write a comment..." name="comment" />
                </div>
            </div>
        </div>
    )
}

export default FeedCard;