import { React, useState, useEffect } from "react";
import { loginGoogle } from "../../../redux/pynk/auth";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";

const FaceBookLoginComponent = () => {
  const googleProfile = useSelector(({ auth }) =>
    auth ? auth.googleProfile : ""
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const appId = "709473964494006";

  const [profile, setProfile] = useState(
    null
    /*   faceBookProfile && faceBookProfile.profile */
  );
  const componentClicked = () => {
    console.log("click");
  };
  const responseFacebook = (response) => {
    console.log(response);
  };

  return profile ? (
    <>Logout Facebook</>
  ) : (
    <LoginSocialFacebook
      appId="856088889511351"
      onResolve={(res) => {
        console.log("res", res);
      }}
      onReject={(error) => {
        console.log("error", error);
      }}
    >
      <FacebookLoginButton />
    </LoginSocialFacebook>
  );
};

export default FaceBookLoginComponent;
