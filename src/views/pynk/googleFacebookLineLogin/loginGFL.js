// otherFile.js
import React, { useState, useEffect, useRef } from "react";

const OtherComponent = () => {
  const googleLogin = () => {
    console.log("googleLogin 555 ");
  };
  const facebookLogin = () => {
    console.log("FacebookLogin 555 ");
  };
  const lineLogin = () => {
    console.log("lineLogin 555 ");
  };

  return { googleLogin, facebookLogin, lineLogin };
};

export default OtherComponent;
