import React from "react";
import { Route } from "react-router-dom";
function Welcome() {
  return (
    <>
      <div>Welcome.</div>
      <Route path="/welcome/new-user">
        <p>Welcome, new user</p>
      </Route>
    </>
  );
}

export default Welcome;
