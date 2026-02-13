import { Button, TextField, Typography, InputAdornment } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { LogInNav } from "../LOGIN_NAVBAR/logInNavbar";
import "../SIGNUP/common.css";
import { json, Link } from "react-router-dom";
import { URL } from "../../URL";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { jsx } from "@emotion/react";
export const LogIn = () => {
  const [state, setState] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [register, setRegister] = useState({
    email: "",
    password: "",
  });

  // const handleClickShowPassword = () => setShowPassword(true);
  // const handleMouseDownPassword = () => setShowPassword(false);

  // const getData = async () => {
  //   try {
  //     const res = await axios.post(`https://oyo-room-backend-api.vercel.app/login`, );
  //     setState(res.data);
  //     console.log(state)
  //   } catch (error) {
  //     console.log("Something Error");
  //   }
  // };
  // const getData = async() => {

  // }

  // console.log(state[0].email);
  const getInputFieldData = async (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  var flag = false;
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("loginToken");
    if (token) {
      navigate("/");
    }
  }, []);

  async function logIn() {
    try {
      const res = await fetch(`${URL.login}`, {
        method: "POST",
        body: JSON.stringify(register),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Login failed");
      }
      const data = await res.json();
      localStorage.setItem("loginToken", data.token);
      localStorage.setItem("currentUser", data.data.name);
      localStorage.setItem("isAuth", true);
      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Login failed. Please check your credentials.");
    }
  }

  return (
    <div id="wrap-main-div">
      <LogInNav />

      <div className="sl-main-div">
        <div className="sl-left-div">
          <h2 className="sl-body-head">There’s a smarter way to OYO around</h2>
          <span>
            Sign up with your phone number and get exclusive access to discounts
            and savings on OYO stays and with our many travel partners.
          </span>
        </div>
        <div id="sl-right-div">
          <div
            style={{
              backgroundColor: "#da1b42",
              color: "white",
              padding: "10px 0 10px 20px",
            }}
          >
            <p>Sign up & Get ₹500 OYO Money</p>
          </div>
          <form>
            <div id="sl-form-div" style={{ paddingBottom: "20px 10px" }}>
              <h2
                style={{
                  fontWeight: "600",
                  marginTop: "15px",
                  marginBottom: "10px",
                }}
              >
                Login / Signup
              </h2>
              <TextField
                onChange={(e) => getInputFieldData(e)}
                size="small"
                margin="normal"
                padding="0"
                label="Email"
                placeholder="Enter Email...."
                name="email"
                required
              />{" "}
              <TextField
                onChange={(e) => getInputFieldData(e)}
                size="small"
                margin="normal"
                label="Password"
                placeholder="Enter Password"
                name="password"
                required
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(true)}
                        onMouseDown={() => setShowPassword(false)}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />{" "}
              <Button
                onClick={(e) => logIn(e)}
                variant="contained"
                color="secondary"
                margin="normal"
                id="LoginButton"
                sx={{
                  backgroundColor: "#1ab64f",
                  width: "200px",
                  m: "auto",
                  p: "10px",
                  mt: "20px",
                  mb: "20px",
                }}
              >
                Login
              </Button>
              <p>
                Don't have an Account ?{" "}
                <Link
                  to="/signup"
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
