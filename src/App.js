import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Feed from "./pages/Feed/Feed";
import Profile from "./pages/Profile/Profile";
import SelfProfile from "./pages/SelfProfile/SelfProfile";

function App(props) {
  return (
    <Router>
        <Routes>
          {props?.user?.user?.token ? (
            <Route key="" exact path="/" element={<Feed />} />
          ) : (
            <Route key="" exact path="/" element={<Login />}/>
          )}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/feed" element={<Feed />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/selfprofile" element={<SelfProfile />} />


        </Routes>
    </Router>
  );
}

const mapStateToProps = state => ({
  user:state.user
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {},
    dispatch
  );
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(App);
