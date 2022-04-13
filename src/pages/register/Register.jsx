import './register.css';
import { useState } from 'react';


export default function Register() {
    const [isError, setisError] = useState();
    const [username, setusername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setconfirmPassword] = useState();

    const Signup = async () => {
        let item = { username, email, password, }

        let result = await fetch("http://localhost:5000/api/auth/register", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)

        });
        result = await result.json();
        console.log(result);
    }
    const checkValidation = (e) => {
        setconfirmPassword(e.target.value);
        if (confirmPassword !== password) {
            setisError("confirm password should be match with password");
        } else {
            setisError("");

        }

    };



    return (
        <div className='Register'>
            <div className="registWrapper">
                <div className="registerLeft">
                    <h3 className="registerContent">Buzzz</h3>
                    <span className="registerContent1">
                        Connect with friends and the world
                        <br />around you on Buzzz
                    </span>
                </div>
                <div style={{ position: 'absolute', top: 20, marginLeft: 330 }}>
                    {isError}
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <input placeholder="Username" className="registerInput" onChange={(e) => setusername(e.target.value)} />
                        <input placeholder="Email" className="registerInput" onChange={(e) => setEmail(e.target.value)} />
                        <input placeholder="Password" className="registerInput" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} className="registerInput" onChange={(e) => checkValidation(e)} />
                        <button onClick={Signup} className="registerButton" >Sign Up</button>

                        <button className="loginRegisterButton">Log into Account</button>



                    </div>
                </div>
            </div>

        </div>
    );
}
