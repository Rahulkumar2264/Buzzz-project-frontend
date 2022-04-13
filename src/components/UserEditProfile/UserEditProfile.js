import React from 'react'
import "./UserEditProfile.css";

function UserProfile() {
    return (
        <div className="selfuser-profile-wrapper">
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
                    <h2 className='profile-user-name'> Sarah Wood</h2>
                </div>
                <div className="form">
                    <div className='input-box'>
                        <span className='details'>First Name</span>
                        <input type='text' placeholder='First Name' required />

                    </div>
                    <div className='input-box'>
                        <span className='details'>Last Name</span>
                        <input type='text' placeholder='Last Name' required />

                    </div>
                </div>
                <div className='form'>
                    <div className='input-box'>
                        <span className='details'>Designation</span>
                        <input type='text' placeholder='Co-founder' required />

                    </div>
                    <div className='input-box'>
                        <span className='details'>My Website</span>
                        <input type='text' placeholder='Sarahwood.org' required />

                    </div>
                </div>
                <div className='form'>
                    <div className='input-box'>
                        <legend>Gender</legend>
                        <p>
                            Male<input type="radio" name="gender" id="male" required />
                            Female <input type="radio" name="gender" id="female" required />
                        </p>

                    </div>
                    <div className='input-box'>
                        <span className='birthday'>Birthday</span>
                        <input type='date' id='birthday' name='birthday' required />

                    </div>

                </div>

                <div className='form'>
                    <div className='input-box'>
                        <span className='details'>City</span>
                        <input type='text' placeholder='Nodia' required />

                    </div>
                    {/* <div className='input-box'>
                        <span className='details'>State</span>
                        <input type='text' placeholder='UP' required />
                        </div> */}
                    <div className='input-box'>
                        <span className='details'>State</span>
                        <select name='state' id='state' required>
                            <option value={'UP'}>UP</option>
                            <option value={'Bihar'}>Bihar</option>
                            <option value={'Delhi'}>Delhi</option>
                        </select>
                    </div>
                    {/* <div className='input-box'>
                           <span className='details'>Zip</span>
                           <input type='text' placeholder='201310' required />
                        </div> */}
                    <div className='input'>
                        <span className='details'>Zip</span>
                        <input type='text' placeholder='201310' required />

                    </div>
                </div>
                <div>
                    <div className="input-button">
                        <button className="btn btn-primary">Save</button>
                        <button className="btn btn-outline-primary">Reset All</button>
                    </div>
                </div>

            </div>
        </div>

    );

}

export default UserProfile;