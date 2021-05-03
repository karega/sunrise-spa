import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Breadcrumb.scss";

const Breadcrumb = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  let route = id.split("-");
  const mainCategory = route[route.length - 1];
  return (
    <div className="breadcrumb-area breadcrumb-bg-1 bg-gray">
      <div className="container-fluid"></div>
      <div className="breadcrumb-content text-center">
        <div
          className="breadcrumb-title"
        >
          <h2 style={{ textTransform: "capitalize" }}> {mainCategory} </h2>
        </div>
        <ul>
          {!route.includes("-") && (
            <li>
              <Link to="/" data-test="breadcrumb-home-link">
                {t("home")}
              </Link>
            </li>
          )}
          {route.map((item, index) => {
            return (
              <li className="active" key={index}>
                <Link to={`/products/${route.slice(0, index + 1).join("-")}`} data-test="breadcrumb-ancestor-link" className="active">
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
