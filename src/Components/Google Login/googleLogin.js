import { GoogleLogin } from "react-google-login";

export const LogedIn = () => {
  //   const [showLogin, setShowLogin] = useState(true);

  const onLoginSucess = (res) => {
    // Handle successful login
  };

  const onLoginFailure = (res) => {
    // Handle login failure
  };
  const clientid =
    "291586213988-15e4vphul9cg4tep7fbkmchs8ekk74om.apps.googleusercontent.com";
  return (
    <div>
      {console.log("afjal")}
      <GoogleLogin
        clientId={clientid}
        buttonText="Login"
        onSuccess={onLoginSucess}
        onFailure={onLoginFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};
