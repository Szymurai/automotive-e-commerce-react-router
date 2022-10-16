import React from "react";
import { Link } from "react-router-dom";
import Coupon from "../components/Coupon";
import "../styles/CouponPage.css";

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

const CouponPage = ({ match }) => {
  const couponsList = coupons.filter((coupon) => {
    console.log(coupon.id);
    return coupon.id === match.params.id * 1;
  });
  // console.log(match.params.id * 1);
  // console.log(couponsList);
  // console.log(match.url);

  return (
    <div className="couponPage">
      <h3>Szczegóły Promocji:</h3>
      <Coupon
        id={match.params.id}
        url={match.url}
        code={couponsList[0].code}
        amount={couponsList[0].amount}
      />
      <Link to="/promotions">Powrót</Link>
    </div>
  );
};

export default CouponPage;
