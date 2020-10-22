import React, { useState, useEffect } from "react";
import "./App.css";
import { API, Auth, Storage } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
      <p>Hello, click the button below for auth stuff</p>
    </div>
  );
}

export default App;
