import React from "react";
import "./AddToCartForm.scss";
import { useTranslation } from "react-i18next"

const AddToCartForm = ({ isOnStock, availableQuantity }) => {
  const { t } = useTranslation();
  const [quantity, changeQuantity ] = React.useState(1);
  const addLineItem = () => {};
  return (
    <div className="product-dec-action-wrap pro-dec-action-2">
      {isOnStock ? (
        <form onSubmit={() => addLineItem()}>
          <div className="quality-cart-wrap">
            <div className="quality-wrap">
              <input
                className="input-text qty"
                type="number"
                min="1"
                value={quantity}
                max={availableQuantity}
                name="qty"
                maxlength="12"
                data-test="add-to-cart-amount"
                title="Qty"
              />
            </div>
            <div className="quality-wrap">
              <input
                data-test="add-to-cart-button"
                type="submit"
                value={t("addToCart")}
              />
            </div>
          </div>
        </form>
      ) : (
        <div>
          <div className="pro-cart-wrap">{t("notInStock")}</div>
        </div>
      )}
    </div>
  );
};

export default AddToCartForm;
