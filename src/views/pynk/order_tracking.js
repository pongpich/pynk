import React, { useState, useEffect } from "react";
import Footer from "./footer";
import { useHistory } from "react-router-dom";

const OrderTracking = () => {
  const history = useHistory();

  return (
   <div className="page">
    <Footer />
   </div>
  );
};

export default OrderTracking;
