import React from 'react';
import { useHistory } from "react-router-dom";

function Admin() {
  const history = useHistory();
  return (
    <div>
      <h1>.</h1>
      <h1>.</h1>
      <button onClick={() => history.push("/products_management")}>Go to /products_management</button>
      <h1>Admin Page</h1>
      <h1>.</h1>
      <h2>----Login----</h2>
      <h3>Email: </h3>
      <h3>Password: </h3>
      <button>Login</button>
    </div>
  );
}

export default Admin;
