import React from "react";
// import { Link } from "react-router-dom";
import "./HomePage.css";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { URL } from "../../URL";
import { LoggedInAction } from "../../Action/LoggedInAction";
import { useState } from "react";

export default function Navbar1() {
  const [dropdown, setDropdown] = useState(false);
  let dispatch = useDispatch();
  let loggedInUser = useSelector((store) => {
    return store.UserReducer.LoggedIn;
  });
  // console.log(loggedInUser);
  let currentUser = localStorage.getItem("currentUser");
  let isAuth = localStorage.getItem("isAuth");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let token = localStorage.getItem("loginToken") || null;
      if (token) {
        let res = await fetch(`${URL.users}`, {
          method: "GET",
          headers: { Authorization: token },
        });
        if (!res.ok) {
          throw new Error("Failed to fetch user data");
        }
        let data = await res.json();
        LoggedInAction(data, dispatch);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const changeAuth = () => {
    localStorage.removeItem("loginToken");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isAuth");
    // localStorage.setItem("isAuth", false);
    setDropdown(false);
  };

  return (
    <div
      style={{
        position: "sticky",
        top: "0px",
        zIndex: "100000",
        backgroundColor: "white",
      }}
    >
      <div className="mainNav">
        <Link to="/" className="abk-leftnav">
          <img src="/Images/oyologo.png" alt="oyored" />
        </Link>

        <div className="abk-rightnav">
          <div className="nav-becomeMember">
            <Link>
              <img src="/Images/becomeMember.png" alt="becomeamember" />
            </Link>
          </div>
          <div className="nav-listProperty">
            <Link to="/partner">
              <img src="/Images/listProperty.png" alt="listproperty" />
            </Link>
          </div>
          <div className="nav-language">
            <Link>
              <img src="/Images/language.png" alt="language" />
            </Link>
          </div>

          <div
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
            style={{ position: "relative" }}
          >
            {isAuth ? (
              <Link to="/profile" className="login-signup" id="loginBox">
                <img src="/Images/profile.png" alt="profile" />
                <p>Welcome, {currentUser}</p>
              </Link>
            ) : (
              <Link to="/login" className="login-signup" id="loginBox">
                <img src="/Images/profile.png" alt="profile" />
                <p>Login / Signup</p>
              </Link>
            )}
            {dropdown && isAuth ? (
              <div onMouseEnter={() => setDropdown(true)} id="profileDropdown">
                <Link to="/profile">Profile</Link>
                <Link to="/profile">Wallet</Link>
                <Link to="/profile">Booking History</Link>
                <Link onClick={changeAuth}>Logout</Link>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
