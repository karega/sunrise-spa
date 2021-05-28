import React from 'react';
import './MiniCart.css';
import clsx from 'clsx';
import products from '../../productoverview/ProductList/products.json';
import BasePrice from "../../common/BasePrice"

const MiniCart = ({ openCart }) => {
    const show = true;
    const subtotal = 9
    const close = () => {
      openCart(false)
    }



   const displayedImageUrl = (variant) =>  {
        if (Array.isArray(variant.images) && variant.images.length) {
          return variant.images[0].url;
        }
        return null;
      }

    const sortedLineItems = [{id: 1, name: 'xyz', quantity: 10, variant: []}]
    return (
        <span>
        <div
          className={clsx("sidebar-cart-active", {['inside']: show})}
          data-test="mini-cart-content"
        >
          <div className="sidebar-cart-all">
            <a
              className="cart-close"
              onClick={()=>{close()}}
              data-test="mini-cart-close-button"
            >
              <i className="dl-icon-close"></i>
            </a>
            <div className="cart-content">
              <h3> miniCart</h3>
              <span v-if="cartNotEmpty">
                <ul>
                  {
                      products.results.slice(0,3).map((lineItem)=>{
                          return (
                            <li
                            key={lineItem.id}
                            data-test="mini-cart-line-item"
                            className="single-product-cart"
                          >
                            <div className="cart-img">
                              <a>
                                <img
                                  src={lineItem.masterData.current.masterVariant.images[0].url}
                                  alt={lineItem.name}
                                />
                              </a>
                            </div>
                            <div className="cart-title">
                              <h4>
                                <a
                                  data-test="cart-line-item-link"
                                >
                                   {lineItem.masterData.current.name}
                                </a>
                              </h4>
                              <span
                                data-test="cart-line-item-quantity"
                              >
                                {1} ×
                                <BasePrice price={lineItem.masterData.current.masterVariant.price} />
                              </span>
                            </div>
                            {/* <LineItemDeleteForm lineItemId="lineItem.id" /> */}
                          </li>
                          )
                      })
                  }
                </ul>
                <div className="cart-total">
                  <h4>
                    subtotal: 315 EUR
                   {/* <BasePrice
                      price={lineItem.masterData.current.masterVariant.price}
                      data-test="mini-cart-price"
                    />  */}
                  </h4>
                </div>
                <div className="cart-checkout-btn">
                  <a
                    
                    onClick={close}
                    className="btn-grey"
                  >
                    viewBag
                  </a>
                  <a
                    
                    data-test="checkout-button"
                    onClick={close}
                    >checkout</a>
                </div>
              </span>
              {/* <span v-if="!cartNotEmpty">
                <h5>'emptyCart'</h5>
              </span> */}
            </div>
          </div>
        </div>
      </span>
    )
}

export default MiniCart;
