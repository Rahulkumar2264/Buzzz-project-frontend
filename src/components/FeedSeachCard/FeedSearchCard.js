import React from 'react'
import "./FeedSearchCard.css";
// import Photo_logo from "../../Images/Photo-logo.png"


function FeedSearchCard() {
    return (
        <div>

            <div className='search-wrapper'>
                <img src='https://i.picsum.photos/id/822/200/200.jpg?hmac=pXgRn-rbZIan3GYBv9xCVsdyt_Kzq5Q_d0AbLnzeT3k'  alt="" />
                <input className="search-field" type="text" placeholder="Start a post..." name="search" />

                <span className='photo-logo'> Photo/Video</span>
            </div>
            {/* <div class="search">
                <input type="text" placeholder="Start a post..." name="search" />
                <button type="submit"><i class="fa fa-search"></i></button>
            </div> */}
        </div>
    )
}

export default FeedSearchCard;