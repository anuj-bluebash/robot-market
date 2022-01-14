import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component.jsx';
import { selectCartHidden } from '../../redux/cart/cart.selectors.js';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      Robot Market
    </Link>

    <div className="options">
      <Link className="option" to="/">
        SHOP
      </Link>

      <Link className="option" to="/">
        CONTACT
      </Link>

      <Link className="option" to="/">
        SIGN IN
      </Link>
      <CartIcon />
    </div>
    {
        hidden ? null:
        <CartDropdown />
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
