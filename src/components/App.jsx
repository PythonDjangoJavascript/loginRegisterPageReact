import React from "react";
import Form from "./Form";
import Hello from "./Hello";



var isLoggedIn = true;
var userIsRegisterd = false;


function App()
{
  return (
    <div className="container">
      {isLoggedIn ? <Hello /> : <Form isRegistered={userIsRegisterd} />}
    </div>
  );
}

export default App;
