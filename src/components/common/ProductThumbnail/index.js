import React from "react";
import "./ProductThumbnail.scss";
import Translation from "./ProductThumbnail.json"
import { useTranslation } from "react-i18next";
import BasePrice from "../BasePrice"

const ProductThumbnail = ({ product }) => {
const { t , i18n } =  useTranslation();
const language = 'en'
 React.useEffect(()=> {
    i18n.addResourceBundle(language, "thumb", Translation)
 }, [])
  const hasPrice = false;
  const hasDiscount = false;
  const openModal = () => {};

  const addLineItem = () => {};
  return (
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
        <div className="product-wrap mb-50">
          <div className="product-img mb-25">
            <a href>
              <img className="default-img" src={product.masterData.current.masterVariant.images[0].url} alt="" />
              {hasPrice && hasDiscount && (
                <span
                  data-test="product-thumbnail-sale-flag"
                  className="badge-pink badge-right"
                >
                  Sale
                </span>
              )}
            </a>
            <div className="product-action">
              <a  onClick={openModal}>
                <i className="dl-icon-view"></i> <span>Quick Shop</span>
              </a>
              <a
                data-toggle="tooltip"
                title="Add to Cart"
                href="#"
                onClick={() => addLineItem()}
              >
                <i className=" dl-icon-cart29"></i>
                <span>{ t(`thumb:${language}.addToCart`)}</span>
              </a>
            </div>
          </div>
          <div className="product-content text-center mt-15">
            <h3>
              <a href data-test="product-thumbnail-name">{product.masterData.current.name}</a>
            </h3>
            <div className="product-price" >
              <BasePrice price={product.masterData.current.masterVariant.price} />
            </div>
          </div>
        </div>
      </div>
  )
};

export default ProductThumbnail;
