import React from "react";
import { Route } from "react-router-dom";
import "../styles/Footer.sass";

const Footer = () => {
  return (
    <div className="footer">
      <a class="logo" href="https://automotivexpert.eu/">
        <img
          src="https://automotivexpert.eu/wp-content/uploads/2021/09/znak-ae.svg"
          alt="Logo AutomotivExpert"
          className="logoImg"
        />
      </a>
      <h3>Automotive-Expert Spółka z ograniczoną odpowiedzialnością</h3>
      <br></br>
      <p>
        Prawa autorskie © 2022 Wszelkie prawa zastrzeżone — Wykonane przez{" "}
        <a href={"http://specya.com/"}>Specya</a>
      </p>
      <br></br>
      <em>Podręczne menu:</em>
      <br></br>
      <br></br>
      <Route
        path="/"
        exact
        render={(props) => {
          return (
            <p>
              Jesteś na <span>Stronie Głównej</span>
            </p>
          );
        }}
      ></Route>
      <Route
        path="/:page"
        exact
        render={(props) => {
          return (
            <p>
              Jesteś na{" "}
              <span>
                stronie{" "}
                {props.match.params.page === "promotions" ? "Promocji" : null}
                {props.match.params.page === "coupons" ? "Kuponów" : null}
              </span>
            </p>
          );
        }}
      ></Route>
      <Route
        path="/:page/:idCoupon"
        exact
        render={(props) => {
          return (
            <p>
              Jesteś na{" "}
              <span>
                stronie{" "}
                {props.match.params.page === "coupons" &&
                props.match.params.idCoupon
                  ? "Kuponu"
                  : null}
              </span>
            </p>
          );
        }}
      ></Route>
    </div>
  );
};

export default Footer;
