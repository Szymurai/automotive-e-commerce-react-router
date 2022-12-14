import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CouponPage from "../pages/CouponPage";
import PromoListPage from "../pages/PromoListPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import AdminPage from "../pages/AdminPage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";

const Page = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage}></Route>
      <Route path="/promotions" component={PromoListPage}></Route>
      <Route path="/coupons/:id" component={CouponPage}></Route>
      {/* <Route path="/parts" component={PartsPage}></Route> */}
      <Route path="/blog" component={BlogPage}></Route>
      <Route path="/contact" component={ContactPage}></Route>
      <Route path="/admin" component={AdminPage}></Route>
      <Route path="/login" component={LoginPage}></Route>
      <Route component={ErrorPage}></Route>
    </Switch>
  );
};

export default Page;
