import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { thbPrice } from "../../utils/helper";

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, total}) => (
  <div className='cart-dropdown'>

    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>

      <div className="header-block">
        <span>Name</span>
      </div>

      <div className="header-block">
        <span>Quantity</span>
      </div>

      <div className="header-block">
        <span>Price</span>
      </div>

      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {
    cartItems.map(cartItem =>
        (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
        )
    }
    <div className='total'>
        <span>TOTAL: {thbPrice(total)}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CartDropdown);


