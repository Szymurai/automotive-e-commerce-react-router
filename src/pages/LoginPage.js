import React from "react";
import "../styles/LoginPage.css";

const LoginPage = () => {
  return (
    <>
      <div className="login">
        <h4>Zaloguj się</h4>
        <br></br>
        <label htmlFor="login">
          Login:
          <input
            type={"text"}
            id={"login"}
            placeholder={"Wpisz login..."}
          ></input>
        </label>
        <br></br>
        <label htmlFor="pass">
          Hasło:
          <input
            type={"password"}
            id={"pass"}
            placeholder={"Wpisz hasło..."}
          ></input>
        </label>
      </div>
      {/* <button className="btn btn-danger">Zaloguj się</button> */}
    </>
  );
};

export default LoginPage;
