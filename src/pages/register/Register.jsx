import './register.css';
import { useState } from 'react';


export default function Register() {

    const [username,setusername]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

     const Signup= async ()=>{
         let item ={username,email,password}

         let result = await fetch("http://localhost:8080/api/auth/register", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)

        });
        result = await result.json();


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
                <div className="registerRight">
                    <div className="registerBox">
                        <input placeholder="Username" className="registerInput" onChange={(e)=>setusername(e.target.value)} />
                        <input placeholder="Email" className="registerInput"onChange={(e)=>setEmail(e.target.value)} />
                        <input placeholder="Password" className="registerInput" onChange={(e)=>setPassword(e.target.value)}/>
                        <input placeholder="Password Again" className="registerInput" />
                        <button onClick={Signup} className="registerButton" >Sign Up</button>

                        <button className="loginRegisterButton">Log into Account</button>



                    </div>
                </div>
            </div>

        </div>
    );
}
