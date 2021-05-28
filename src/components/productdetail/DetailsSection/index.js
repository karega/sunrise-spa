import "./DetailsSection.css";
import React from "react";
import { useTranslation } from "react-i18next";

const DetailsSection = ({ sku, product }) => {
  const [firstCollapsed, firstToggle] = React.useState(false);
  const [secondCollapsed, secondToggle] = React.useState(false);
  const { t } = useTranslation();
  const productAttributes = [
    { label: "Designer", name: "Spektre" },
    { label: "Color Description", name: "olive" },
    { label: "Size", name: "one size" },
    { label: "Style", name: "sporty" },
    { label: "Gender", name: "Damen" },
    {
      label: "Manufacturer AID",
      name: "AD06 VERDE VERDE",
    },
  ];
  return (
    <div className="description-review-wrapper" v-if="product">
      <div className="panel-group" id="accordion1">
        <div className="panel pro-dec-accordion">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  firstToggle(!firstCollapsed);
                }}
                className={`${firstCollapsed ? "collapsed" : ""}`}
                data-test="product-attributes-accordion"
              >
                {t("productDetails")}
              </a>
            </h4>
          </div>
          <div
            data-parent="#accordion1"
            id="pro-dec-accordion1"
            className={`product-description-wrapper panel-collapse collapse ${
              !firstCollapsed ? "show" : ""
            }`}
          >
            <div className="panel-body">
             <ul className="product-features-list">
                {productAttributes.map((attribute) => {
                  return (
                    <li
                      data-test="product-attributes-list"
                      key={attribute.name}
                    >
                      <span className="attribute-name">{attribute.label}: </span>
                      <span>{attribute.name || attribute.value}</span>
                    </li>
                  );
                })}
              </ul> 
            </div>
          </div>
        </div>
        <div className="panel pro-dec-accordion">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  secondToggle(!secondCollapsed);
                }}
                className={`${secondCollapsed ? "collapsed" : ""}`}
              >
                {t("deliveryReturns")}
              </a>
            </h4>
          </div>
          <div
            data-parent="#accordion1"
            id="pro-dec-accordion2"
            className={`product-description-wrapper panel-collapse collapse ${
              !secondCollapsed ? "show" : ""
            }`}
          >
            <div className="panel-body">
              <ul className="product-delivery-list">
                <li>{t("freeReturns")}</li>
                <li>{t("moreDeliveryInfo")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
