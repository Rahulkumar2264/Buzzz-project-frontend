import './register.css';
import { useState } from 'react';




export default function Register() {
    const [isError, setIsError] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const Signup = async (props) => {
        if (isError) {
            return
        }
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
        setConfirmPassword(e.target.value);

        if (e.target.value !== password) {

            setIsError("confirm password should be match with password");
        } else {
            setIsError("");
        }
    };
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const validateAndSetEmail = (event) => {
        const email = event.target.value;
        setEmail(email);
        console.log("validateEmail(email)", validateEmail(email));
        if (!validateEmail(email)) {
            setIsError("Invalid Email")
        } else {
            setIsError("");
        }
    }
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
                        <input type='username' placeholder="Username" className="registerInput" onChange={(e) => setUsername(e.target.value)} />
                        <input type='email' placeholder="Email" className="registerInput" onChange={(e) => validateAndSetEmail(e)} />
                        <input type="password" placeholder="Password" className="registerInput" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input type="password" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} required className="registerInput" onChange={(e) => checkValidation(e)} />
                        <button onClick={Signup} className="registerButton" >Sign Up</button>

                        <a href='/login'><button className="loginRegisterButton">Log into Account</button></a>



                    </div>
                </div>
            </div>

        </div>
    );
}
