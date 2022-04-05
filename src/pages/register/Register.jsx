import './register.css';


export default function Register() {
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
                        <input placeholder="Username" className="registerInput" />
                        <input placeholder="Email" className="registerInput" />
                        <input placeholder="Password" className="registerInput" />
                        <input placeholder="Password Again" className="registerInput" />
                        <button className="registerButton">Sign Up</button>

                        <button className="loginRegisterButton">Log into Account</button>



                    </div>
                </div>
            </div>

        </div>
    );
}
