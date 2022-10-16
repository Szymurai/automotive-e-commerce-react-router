import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/PromoListPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

const coupons = [
  {
    id: 3570,
    code: "daf100$promo",
    amount: "100.00",
    description: "-100$ na części DAF",
    date_created: "2021-01-23T19:53:37",
    date_expires: null,
  },
  {
    id: 3572,
    code: "promoday50%",
    amount: "100.00",
    description: "Każde zamówienie -50$",
    date_created: "2021-01-23T19:53:37",
    date_expires: null,
  },
  {
    id: 3550,
    code: "nox125$promo",
    amount: "100.00",
    description: "Czujniki NOx -125$",
    date_created: "2021-01-23T19:53:37",
    date_expires: null,
  },
];

const ProductListPage = () => {
  const list = coupons.map((coupon) => (
    <li key={coupon.id}>
      <NavLink to={`/coupons/${coupon.id}`}>
        <FontAwesomeIcon className="couponsIcon" icon={solid("fire")} />{" "}
        <p>{coupon.description}</p>
      </NavLink>
    </li>
  ));
  return (
    <div className="coupons">
      <h3>Promocje:</h3>
      <div>
        <ul>{list}</ul>
      </div>
    </div>
  );
};

export default ProductListPage;
