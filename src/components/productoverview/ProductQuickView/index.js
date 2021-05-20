import React from "react";
import "./ProductQuickView.scss";
import { useTranslation } from "react-i18next";
import ProductGallery from "../../productdetail/ProductGallery";
import BasePrice from "../../common/BasePrice";
import AddToCartForm from "../../productdetail/AddToCartForm";
import VariantSelector from "../../productdetail/VariantSelector"
import clsx from "clsx";


const ProductQuickView = ({ openModal, isModal}) => {
  const [product, setProduct] = React.useState({});
  React.useEffect(() => {
    setProduct(JSON.parse(localStorage.getItem("product")));
  }, []);

  const { t } = useTranslation();
  return product && product.masterData ? (
    <div className="vm--container">
      <div className="vm--overlay">
        <div style={{ borderRadius: 0 }} className={clsx("vm--modal", {['showModal']: isModal})} id="modal-window" name="quickView">
          <div className="modal-body">
            <button type="button" className="close" onClick={() => openModal()}>
              <span className="dl-icon-close"></span>
            </button>
            <div className="row no-gutters">
              <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                <ProductGallery quickview={true} />
              </div>
              <div className="row">
                <div className="col-lg-12" style={{ paddingTop: "30px" }}>
                  <div
                    className="product-details-content product-details-ptb"
                    data-test="product-data"
                  >
                    <h2 data-test="product-name">
                      {product.masterData.current.name}
                    </h2>
                    <h3>
                      <BasePrice
                        price={product.masterData.current.masterVariant.price}
                      />
                    </h3>
                     <VariantSelector product={product} sku={product.masterData.current.masterVariant.sku}/>
                    <div>
                      {t("inStock")}: {10}
                    </div>
                    <AddToCartForm
                      sku={product.masterData.current.masterVariant.sku}
                      isOnStock={true}
                      availableQuantity={3}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ProductQuickView;
