import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  let emailInputRef = useRef();
  let passwordInputRef = useRef();
  let navigate = useNavigate();
  let messageInputRef = useRef();
  return (
    <div className="App">
      <form>
        <div>
          <h2
            style={{
              backgroundColor: "red",
              color: "yellow",
              fontSize: "2rem",
              borderRadius: "50px",
              boxShadow: "5px 5px 10px grey",
            }}
          >
            Login
          </h2>
        </div>
        <div>
          <label>email</label>
          <input ref={emailInputRef}></input>
        </div>
        <div>
          <label>password</label>
          <input ref={passwordInputRef}></input>
        </div>
        <div>
          <label>message</label>
          <input ref={messageInputRef}></input>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              let typedEmail = emailInputRef.current.value;
              let typedPassword = passwordInputRef.current.value;
              if (
                typedEmail == "dhoni7@gmail.com" &&
                typedPassword == "dhoni"
              ) {
                navigate("/dashboard", {
                  state: { msg: messageInputRef.current.value },
                });
              } else {
                alert("Username or paswsword is incorrect");
              }
            }}
          >
            Login
          </button>
        </div>
      </form>
      <br></br>
      <br></br>
      <br></br>
      <Link to="/signup">Signup</Link>
    </div>
  );
}

export default Login;
