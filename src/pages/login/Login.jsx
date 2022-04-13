import { useState } from "react";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import "./login.css";
import { setUserInfo } from "../../redux/user/user.action";
import { withRouter } from "../../router";

function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  async function login() {
    console.warn(email, password);
    let items = { email, password };

    let result = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(items),
    });
    result = await result.json();
    if (result !== "wrong password" && result !== "user not found") {
      props.setUserInfo(result);
      localStorage.setItem("user", JSON.stringify(result));
      props.history("/feed");
    }
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginContent">Buzzz</h3>
          <span className="loginContent1">
            Connect with friends and the world
            <br />
            around you on Buzzz
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              placeholder="Email"
              type="email"
              className="loginInput"
              required
              // ref={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
              required
              onChange={(e) => setPassword(e.target.value)}
              minLength="8"
              // ref={password}
            />
            <button className="loginButton" onClick={login}>
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
           <a href="/register"> <button className="loginRegisterButton">
              Create a New Account
            </button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setUserInfo,
    },
    dispatch
  );
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  withRouter(Login)
);
