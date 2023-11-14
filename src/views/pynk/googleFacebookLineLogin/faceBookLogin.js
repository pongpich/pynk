import { React, useState, useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import { loginGoogle } from "../../../redux/pynk/auth";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

const GoogleLoginComponent = () => {
  const googleProfile = useSelector(({ auth }) =>
    auth ? auth.googleProfile : ""
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const clientId = "709473964494006";

  const [profile, setProfile] = useState(
    googleProfile && googleProfile.profile
  );

  useEffect(() => {
    const initClientGoogle = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "email profile", // Add any required scopes
      });
    };
    gapi.load("client:auth2", initClientGoogle);
  }, []);

  useEffect(() => {
    // ติดตามการเปลี่ยนแปลงของ googleProfile
    setProfile(googleProfile && googleProfile.profile);
  }, [googleProfile]);

  const onSuccessGoogle = (res) => {
    dispatch(loginGoogle(res.profileObj));
  };

  const onFailureGoogle = (res) => {
    console.log("onFailureGoogle", res);
  };

  const logOutGoogle = () => {
    history.push("/home");
    dispatch(loginGoogle(null));
  };

  /*   console.log("googleProfile 555", googleProfile); */

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
