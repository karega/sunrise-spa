import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import ProductList from "../ProductList/index";
import "./PageProductOverview.scss";

const PageProductOverview = () => {
  return (
    <div>
      <Breadcrumb />
      <ProductList
      // @open-modal="openModal"
      // :categorySlug="categorySlug"
      // :page="page"
      />
      {/* <ProductQuickView
            :showModal="showModal"
            :productSku="productSku"
            @close-modal="closeModal"
            /> */}
    </div>
  );
};

export default PageProductOverview;
