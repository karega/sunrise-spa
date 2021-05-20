import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import ProductList from "../ProductList/index";
import ProductQuickView from "../ProductQuickView";
import "./PageProductOverview.scss";

const PageProductOverview = () => {
  const [isModal, open] = React.useState(false);

  const openModal = () => {
    open(!isModal);
  };
  return (
    <div>
      <Breadcrumb />
      <ProductList openModal={openModal} />
      {isModal && <ProductQuickView openModal={openModal} isModal={isModal}/>}
    </div>
  );
};

export default PageProductOverview;
