import React from "react";

const BaseMoney = ({ money }) => {
  const amount = money ? (money.centAmount / 10 ** money.fractionDigits ) : 0
  const currency = money ? money.currencyCode : "";

  return money && Object.keys(money).length ? <span data-test="product-original-price">{ amount } {money.currencyCode}</span> : 0;
};

export default BaseMoney;
