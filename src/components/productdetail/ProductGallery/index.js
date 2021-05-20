import React from "react";
import "./ProductGallery.scss"
const ProductGallery = ({ quickview }) => {
  const product = JSON.parse(localStorage.getItem('product'));
  const productImage = product.masterData.current.masterVariant.images[0]?.url;
  return (
    <div className="pro-dec-big-img-slider product-big-img-style">
      <div className="easyzoom easyzoom--overlay" >
        <a href={productImage}>
          {productImage &&<img
            className={`${!quickview ? "product-image" : "quickview-img"}`}
            src={productImage}
            alt=""
            data-test="product-image"
          />}
        </a>
      </div>
    </div>
  );
};

export default ProductGallery;
