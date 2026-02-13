import {
  Button,
  TextField,
  Typography,
  InputAdornment,
  getPaginationUtilityClass,
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { LogInNav } from "../LOGIN_NAVBAR/logInNavbar";
import "./common.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { URL } from "../../URL";
// import GoogleButton from "react-google-button";
// import { LogedIn } from "../Google Login/googleLogin";
// import { gapi } from "gapi-script";
// import { LogedIn } from "../Google Login/googleLogin";

export const SignUp = () => {
  const [userData, setUserData] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [checkValidEmail, setCheckValidEmail] = useState("");
  const [inputFieldData, setInputFieldData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const regrex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  useEffect(() => {
    getUserData();
  }, []);
  // const clientid =
  //   "291586213988-15e4vphul9cg4tep7fbkmchs8ekk74om.apps.googleusercontent.com";
  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId: clientid,
  //       scope: "",
  //     });
  //   }
  //   gapi.load("client:auth2", start);
  // });
  // console.log(userData);
  // console.log('URL.users:', URL.users)
  const getUserData = async () => {
    const result = await axios.get(`${URL.users}`);
    setUserData(result.data);
  };
  //for showpassord icon

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleChangeInputField = async (e) => {
    setInputFieldData({
      ...inputFieldData,
      [e.target.name]: e.target.value,
    });
    if (regrex.test(inputFieldData.email)) {
      setCheckValidEmail("");
    } else {
      setCheckValidEmail("Please Enter Valid Email");
    }
    console.log(inputFieldData);
  };
  const sendDataToBackend = async (e) => {
    e.preventDefault();
    if (
      inputFieldData.name === "" ||
      inputFieldData.email === "" ||
      inputFieldData.password === ""
    ) {
      toast.info("Please fill all the field", {
        position: "top-center",
        theme: "dark",
      });
      return;
    }

    // if (!regrex.test(inputFieldData.email)) {
    //   toast.info("Please enter a valid email address", {
    //     position: "top-center",
    //     theme: "dark",
    //   });
    //   return;
    // }

    // check email unique or not
    // for (let i = 0; i < userData.length; i++) {
    //   if (userData[i].email === inputFieldData.email) {
    //     toast.info("Email Id Already Exist", {
    //       position: "top-center",
    //       theme: "colored",
    //     });
    //     return;
    //   }
    // }
    console.log("inputFieldData:", inputFieldData);

    try {
      console.log("inputFieldData:", inputFieldData);
      // send data to backend for register new user
      const result = await axios.post(`${URL.signup}`, inputFieldData);
      toast.success("Registration successful", {
        position: "top-center",
        theme: "colored",
      });
      setInputFieldData({
        email: "",
        name: "",
        password: "",
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error("Registration failed. Please try again.", {
        position: "top-center",
        theme: "colored",
      });
    }
  };
  const { name, email, password } = inputFieldData;
  return (
    <div id="wrap-main-div">
      <LogInNav />
      {/* <LogedIn /> */}
      {/* <GoogleButton onClick={LogedIn} /> */}
      <div className="sl-main-div">
        <div className="sl-left-div">
          <h2 className="sl-body-head">There’s a smarter way to OYO around</h2>
          <span>
            Sign up with your phone number and get exclusive access to discounts
            and savings on OYO stays and with our many travel partners.
          </span>
        </div>
        <div id="sl-right-div">
          <div className="s-red-div">
            <p>Sign up & Get ₹500 OYO Money</p>
          </div>
          <form>
            <div id="sl-form-div">
              <h2 id="LoginSignup">Login / Signup</h2>
              <TextField
                onChange={(e) => handleChangeInputField(e)}
                size="small"
                margin="normal"
                padding="0"
                label="Name"
                placeholder="Enter Name......"
                name="name"
                value={name}
              />{" "}
              <TextField
                onChange={(e) => handleChangeInputField(e)}
                size="small"
                margin="normal"
                padding="0"
                label="Email"
                placeholder="Enter Email...."
                name="email"
                required
                type="email"
                value={email}
              />{" "}
              {/* <p style={{ color: "red", marginLeft: "5px" }}>
                {checkValidEmail}
              </p> */}
              <TextField
                onChange={(e) => handleChangeInputField(e)}
                size="small"
                margin="normal"
                label="Password"
                placeholder="Enter Password"
                name="password"
                value={password}
                required
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />{" "}
              <Button
                disabled={password.length < 8 ? true : false}
                onClick={(e) => sendDataToBackend(e)}
                variant="contained"
                // color="warning"
                id="SignupButton"
                margin="normal"
                sx={{
                  backgroundColor: "#1ab64f",
                  width: "200px",
                  m: "auto",
                  p: "10px",
                  mt: "20px",
                  mb: "15px",
                }}
              >
                Register
              </Button>
              {/* <Google /> */}
              <p
                style={{
                  padding: "0px",
                  marginTop: "15px",
                  // border: "2px solid red",
                }}
              >
                Prefer to Sign in with password instead ?{" "}
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  Click here
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
