import { React, useState, useEffect } from "react";
import { GoogleLogin, GoogleLogout, useGoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import { loginGoogle, registerLoginGoogle } from "../../../redux/pynk/auth";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import icon_google from "../../../assets/img/pynk/shop/Google_Icons-09-512.webp";

const GoogleLoginComponent = () => {
  const clientId =
    "796848287017-3eh30gsc3e5o8dv5hh25bqa1c5ushgf8.apps.googleusercontent.com";
  const googleProfile = useSelector(({ auth }) =>
    auth ? auth.googleProfile : ""
  );
  const statusGoogleProfile = useSelector(({ auth }) =>
    auth ? auth.statusGoogleProfile : ""
  );
  const { signOut } = useGoogleLogout({
    clientId,
  });
  const dispatch = useDispatch();
  const history = useHistory();

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
    //registerLoginGoogle email, first_name, last_name
    const email = res.profileObj.email;
    const first_name = res.profileObj.givenName;
    const last_name = res.profileObj.familyName;
    dispatch(registerLoginGoogle(email, first_name, last_name));
    dispatch(loginGoogle(res.profileObj));
    console.log("res.profileObj", res.profileObj);
  };

  const onFailureGoogle = (res) => {
    console.log("onFailureGoogle", res);
  };

  const logOutGoogle = () => {
    history.push("/home");
    dispatch(loginGoogle(null));
    signOut();
  };

  return profile ? (
    <GoogleLogout
      clientId={clientId}
      buttonText="Logout Google"
      onLogoutSuccess={logOutGoogle}
      render={(renderProps) => (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ cursor: "pointer"}}
          onClick={logOutGoogle}
        >
          <img src={icon_google} className="icon-edit" alt="icon_google" />
          ออกจากระบบ
        </div>
      )}
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
