import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/Header.css";
import img1 from "../images/image1.webp";
import img2 from "../images/image2.webp";
import img3 from "../images/image3.webp";
import img4 from "../images/image4.webp";

const Header = () => {
  //   const images = [img1, img2, img3, img4];
  //   const index = Math.floor(Math.random() * 4);
  //   const img = images[index];
  return (
    <>
      <Switch>
        <Route
          path="/"
          exact
          render={() => <img src={img3} alt="ciężarówka"></img>}
        ></Route>
        <Route
          path="/promotions"
          render={() => <img src={img2} alt="ciężarówka"></img>}
        ></Route>
        <Route
          path="/blog"
          render={() => <img src={img1} alt="ciężarówka"></img>}
        ></Route>
        <Route
          path="/contact"
          render={() => <img src={img4} alt="ciężarówka"></img>}
        ></Route>
        <Route
          path="/admin"
          render={() => <img src={img2} alt="ciężarówka"></img>}
        ></Route>
        <Route render={() => <img src={img1} alt="ciężarówka"></img>}></Route>
      </Switch>

      {/* <img src={img} alt="ciężarówka"></img> */}
    </>
  );
};

export default Header;
