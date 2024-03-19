import React, { useEffect, useState } from "react";
import { useGoogleLogout, GoogleLogout } from "react-google-login";
import Cookies from "js-cookie";
import { gapi } from "gapi-script";

export default function LogoutHeader({ isLogout }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // สร้าง state เพื่อตรวจสอบสถานะการล็อกอิน

  const clientId =
    "796848287017-3eh30gsc3e5o8dv5hh25bqa1c5ushgf8.apps.googleusercontent.com";
  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess: () => setIsLoggedIn(false), // เมื่อล็อกเอาท์สำเร็จให้เปลี่ยนสถานะ isLoggedIn เป็น false
  });

  useEffect(() => {
    const dataCookie = Cookies.get("loginUser");
    console.log("test call loggout first");
    console.log("clientId", clientId);

    if (isLoggedIn) {
      console.log("Logging out...");
      signOut();
      setIsLoggedIn(true);
    }
    console.log("test call loggout AFTER CALL");
  }, [isLoggedIn, signOut, isLogout]);

  return null;
}
