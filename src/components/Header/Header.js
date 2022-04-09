import React from 'react'
// import { FaFacebookMessenger } from "react-icons/fa";
// import { FaUserCheck } from "react-icons/fa";
import "./Header.css";


function Header() {
    return (
        <>
            <nav class="navbar navbar-light bg-light" >
                <div class="container-fluid">
                <ul className='menu-list'>
                    {/* <li className='messagelogo'>
                      <FaFacebookMessenger /> 
                    </li>
                    <li className='userlogo'>
                      < FaUserCheck/> 
                    </li> */}
                    <li className='profilelogo'>
                    <img src="https://i.picsum.photos/id/822/200/200.jpg?hmac=pXgRn-rbZIan3GYBv9xCVsdyt_Kzq5Q_d0AbLnzeT3k" class="img-thumbnail" alt="..."/>
                    Shekhar Agarwal
                    </li>
                    <li className='applogo'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6o0ZdEbUTXMqyDY04csGud1Z2bGUaQX7fYnlw3BSSXx6HY_xl0uHHFkBMpK4bIYM-1uM&usqp=CAU" class="img-thumbnail" alt="..."/>
                    </li>
                </ul>
    
                </div>
            </nav>
        </>
    )
}

export default Header;