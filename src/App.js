import React, { useState, useEffect } from "react";
import "./App.css";
import { API, Auth, Storage } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function App() {
  function callRest() {
    console.log("calling rest");

    fetch("https://aav45kv0rd.execute-api.us-east-1.amazonaws.com/Prod/hello")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          document.querySelector("#return").value = JSON.stringify(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log("error", error);
        }
      );
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Click this button to call rest</p>
        <button onClick={callRest}>Click Me</button>
        <textarea id="return"></textarea>
      </header>
      <AmplifySignOut></AmplifySignOut>
    </div>
  );
}

export default withAuthenticator(App);
