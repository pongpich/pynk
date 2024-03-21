import { React, useState, useEffect } from "react";
import { GoogleLogin, GoogleLogout, useGoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import { loginGoogle, registerLoginGoogle } from "../../../redux/pynk/auth";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import icon_google from "../../../assets/img/pynk/shop/Google_Icons-09-512.webp";
import icon_exit from "../../../assets/img/pynk/shop/exit.png";
import Cookies from "js-cookie";

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

  const onSuccessGoogle = (res) => {
    const email = res.profileObj.email;
    const first_name = res.profileObj.givenName;
    const last_name = res.profileObj.familyName;
    dispatch(registerLoginGoogle(email, first_name, last_name));
    dispatch(loginGoogle(res.profileObj));
  };

  const onFailureGoogle = (res) => {
    console.log("onFailureGoogle", res);
  };

  const logOutGoogle = () => {
    history.push("/home");
    dispatch(loginGoogle(null));
    Cookies.remove("loginUser");
    /*  signOut(); */
  };

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
    const data = Cookies.get("loginUser");
    if (data === undefined || data === null) return;

    if (!googleProfile) {
      console.log("check if");
      logOutGoogle();
    }
    if (googleProfile?.profile) {
      setProfile(googleProfile && googleProfile.profile);
    }
  }, [googleProfile]);

  return profile ? (
    <GoogleLogout
      clientId={clientId}
      buttonText="Logout Google"
      onLogoutSuccess={logOutGoogle}
      render={(renderProps) => (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ cursor: "pointer" }}
          onClick={renderProps.onClick}
        >
          <img
            src={icon_exit}
            className="icon-edit"
            id="icon-google"
            alt="icon_google"
          />
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
      render={(renderProps) => (
        <div>
          <img
            src={icon_google}
            alt="icon_google"
            style={{ width: 40, height: 40, cursor: "pointer" }}
            onClick={renderProps.onClick}
          />
        </div>
      )}
    />
  );
};

export default GoogleLoginComponent;
