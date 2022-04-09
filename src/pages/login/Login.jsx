import { useRef, useState } from 'react';
import './login.css';


export default function Login(e) {
    // const email = useRef();
    // const password = useRef();
    

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // const handleclick = (e) => {
    //     e.preventDefault();
    //     console.log(email.current.value);
    //     console.log(password.current.value);
    // }

    async function login() {
        console.warn(email, password)
        let items = { email, password };

        const result = await fetch("http://localhost:8080/api/auth/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(items)

        });
        result = await result.json();

        console.warn('result',result);
        
        

    }

    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginContent">Buzzz</h3>
                    <span className="loginContent1">
                        Connect with friends and the world
                        <br />around you on Buzzz
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" >
                        <input placeholder="Email"
                            type="email"
                            className="loginInput"
                            required
                            // ref={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input placeholder="Password"
                            type="password"
                            className="loginInput"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            minLength="8"
                        // ref={password}
                        />
                        <button className="loginButton" onClick={login}>Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a New Account</button>



                    </form>
                </div>
            </div>

        </div>
    )
}
