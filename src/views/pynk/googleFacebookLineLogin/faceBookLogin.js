import { React, useCallback } from "react";
import { loginGoogle, registerLoginGoogle } from "../../../redux/pynk/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton, createButton } from "react-social-login-buttons";

export default function FaceBookLoginComponent() {
  const dispatch = useDispatch();
  const history = useHistory();
  const appId = "1108313443646292";
  const REDIRECT_URI =
    "https://plenty-planets-beam-42-118-51-2.loca.lt/account/login";

  const onLoginStart = useCallback((res) => {
    const data = {
      email: res.data.email,
      givenName: res.data.first_name,
      familyName: res.data.last_name,
      facebook: true,
    };
    const email = res.data.email;
    const first_name = res.data.first_name;
    const last_name = res.data.last_name;
    dispatch(registerLoginGoogle(email, first_name, last_name));
    dispatch(loginGoogle(data));
    history.push("/profile-pynk");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    alert("logout success");
  }, []);

  const CustomFacebookLoginButton = createButton({
    text: "",
    icon: "facebook",
    iconFormat: (name) => `fa-brands fa-${name}`,
    iconSize: "30px",
    style: {
      background: "",
      width: "30px",
      height: "28px",
      borderRadius: "50%",
      color: "#293e69",
    },
  });
  return (
    <LoginSocialFacebook
      appId={appId}
      onResolve={(res) => {
        onLoginStart(res);
      }}
      onReject={(error) => {
        console.log("error", error);
      }}
    >
      <CustomFacebookLoginButton />
    </LoginSocialFacebook>
  );
}
