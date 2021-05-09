import React from "react";
import "./style.css";
import BaseMoney from '../BaseMoney'

const BasePrice = ({ price }) => {
  const hasDiscount = price?.discounted;
  const discountedPrice = price?.discounted?.value;
  const originalPrice = price?.value;
  return (
    <span>
      {!hasDiscount ? (
        <span>
          <BaseMoney money={originalPrice} />
        </span>
      ) : (
        <span>
          <span data-test="price-old-value" className="old-price">
            <BaseMoney money={originalPrice} />
          </span>
          <span data-test="price-new-value" className="new-price">
            <BaseMoney money={discountedPrice} />
          </span>
        </span>
      )}
    </span>
  );
};

export default BasePrice;
