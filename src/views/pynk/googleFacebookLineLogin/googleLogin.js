import { React, useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";

const GoogleLoginComponent = () => {
  const clientId =
    "796848287017-3eh30gsc3e5o8dv5hh25bqa1c5ushgf8.apps.googleusercontent.com";

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
    console.log("onSuccessGoogle", res);
  };

  const onFailureGoogle = (res) => {
    console.log("onFailureGoogle", res);
  };

  return (
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
