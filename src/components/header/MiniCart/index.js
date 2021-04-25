import React from 'react';
import './MiniCart.scss';
import clsx from 'clsx';


const MiniCart = () => {
    const show = true;
    const subtotal = 9
    const close = () => {

    }

//    const nameFromLineItem = (lineItem) => {
//         const attributes = variantAttributes(lineItem?.variant, locale(this));
//         return `${lineItem.name} ${attributes.map(
//           ({ name, value }) => `${name}: ${value}`,
//         ).join(', ')}`;
//     }

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
              href="javascript:;"
              onClick={close}
              data-test="mini-cart-close-button"
            >
              <i className="dl-icon-close"></i>
            </a>
            <div className="cart-content">
              <h3> miniCart</h3>
              <span v-if="cartNotEmpty">
                <ul>
                  {
                      sortedLineItems.map((lineItem)=>{
                          return (
                            <li
                            key={lineItem.id}
                            data-test="mini-cart-line-item"
                            className="single-product-cart"
                          >
                            <div className="cart-img">
                              <a>
                                <img
                                  src={()=> displayedImageUrl(lineItem.variant)}
                                  alt={lineItem.name}
                                />
                              </a>
                            </div>
                            <div className="cart-title">
                              <h4>
                                <a
                                  data-test="cart-line-item-link"
                                >
                                   namefromlineItem
                                </a>
                              </h4>
                              <span
                                data-test="cart-line-item-quantity"
                              >
                                {lineItem.quantity} ×
                                {/* <BasePrice price="totalPrice(lineItem)" />*/}
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
                    'subtotal':
                    {/* <BasePrice
                      price={subtotal}
                      data-test="mini-cart-price"
                    /> */}
                  </h4>
                </div>
                <div className="cart-checkout-btn">
                  <a
                    
                    onClick={close}
                    className="btn-grey"
                  >
                    'viewBag'
                  </a>
                  <a
                    
                    data-test="checkout-button"
                    onClick={close}
                    >'checkout'</a>
                </div>
              </span>
              <span v-if="!cartNotEmpty">
                <h5>'emptyCart'</h5>
              </span>
            </div>
          </div>
        </div>
      </span>
    )
}

export default MiniCart;