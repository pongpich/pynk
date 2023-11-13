import { React, useState, useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import { loginGoogle } from "../../../redux/pynk/auth";
import { useSelector, useDispatch } from "react-redux";

const GoogleLoginComponent = () => {
  const googleProfile = useSelector(({ auth }) =>
    auth ? auth.googleProfile : ""
  );
  const dispatch = useDispatch();
  const clientId =
    "796848287017-3eh30gsc3e5o8dv5hh25bqa1c5ushgf8.apps.googleusercontent.com";

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const initClientGoogle = () => {
      console.log("444444");
      gapi.client.init({
        clientId: clientId,
        scope: "email profile", // Add any required scopes
      });
    };
    gapi.load("client:auth2", initClientGoogle);
  }, []);

  const onSuccessGoogle = (res) => {
    /*  console.log("onSuccessGoogle", res);
     */
    setProfile(res.profileObj);
    dispatch(loginGoogle(res.profileObj));
    /* loginGoogle */
  };

  const onFailureGoogle = (res) => {
    console.log("onFailureGoogle", res);
  };

  const logOutGoogle = () => {
    dispatch(loginGoogle(null));
    setProfile(null);
  };
  /* 
  console.log("googleProfile", googleProfile);
  console.log("profile", profile);
 */
  return profile ? (
    <GoogleLogout
      clientId={clientId}
      buttonText="Logout Google"
      onLogoutSuccess={logOutGoogle}
    />
  ) : (
    <GoogleLogin
      clientId={clientId}
      buttonText="เข้าใช้งานด้วย Google"
      onSuccess={onSuccessGoogle}
      onFailure={onFailureGoogle}
      cookiePolicy={"Single_host_origin"}
      isSignedIn={true}
    />
  );
};

export default GoogleLoginComponent;
