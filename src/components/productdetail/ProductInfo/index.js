import React from "react";
import "./ProductInfo.css"
import ProductGallery from '../ProductGallery';
import DetailsSection from '../DetailsSection';
import AddToCartForm from '../AddToCartForm';
import BasePrice from '../../common/BasePrice';
import VariantSelector from '../VariantSelector';
import { useTranslation } from "react-i18next"

const ProductInfo = ({ sku }) => {
    const { t } = useTranslation()
    const availableQuantity = 6;
    const product = JSON.parse(localStorage.getItem('product'));

    return (
        <div className="row">
        <div className="col-lg-5">
          <div className="product-details-tab">
            <ProductGallery sku={sku} /> 
          </div>
        </div>
        <div className="col-lg-7">
          <div
            className="product-details-content product-details-ptb"
            data-test="product-data"
          >
            <h2
              data-test="product-name"
            >
              {product.masterData.current.name}
            </h2>
            <h3>
             <BasePrice price={product.masterData.current.masterVariant.price} /> 
            </h3>
            <VariantSelector product={product} sku={sku}/>
           {availableQuantity &&  <div >
              {t('inStock')}: {availableQuantity}
            </div>}
            <AddToCartForm 
              sku={sku}
              isOnStock={true} 
              availableQuantity={3}
            /> 
           <DetailsSection sku={sku} product={product} /> 
          </div>
        </div>
      </div>
    )
}

export default ProductInfo;
