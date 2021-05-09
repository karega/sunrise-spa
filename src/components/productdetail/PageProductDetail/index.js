import React from "react";
import ProductInfo from "../ProductInfo";

const PageProductDetail = ({ productSlug, sku }) => {
  return (
    <div className="product-details-area pt-50 pb-50">
      <div className="custom-container">
        <ProductInfo sku={sku} />
      </div>
    </div>
  );
};

export default PageProductDetail;
