import React from 'react';
import { connect } from 'react-redux';
import { addItem }from '../../redux/cart/cart.actions.js';

import { formatDate, thbPrice } from "../../utils/helper";
import {selectCartItems} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from "reselect";

import './collection-item.styles.scss';


const CollectionItem = ({item, addItem, uniqItems}) => {
    const {name, price, stock, createdAt, material, image: imageUrl } = item;
    return (
      <div className="collection-item">
        <img src={imageUrl}
          className="image"
        />
        <div className="collection-footer">
          <span className="name"> {name} </span>
          <span className="price">{thbPrice(price)} </span>
        </div>
        <div className="collection-info">
          <span>  Material: {material}, Created: {formatDate(createdAt)}, Stock: {stock}   </span>
        </div>


        { stock > 0 ?
          <button className="custom-button"
            onClick={ () =>  {uniqItems.length > 5 ? alert("You can't add more than 5 unique items") : addItem(item) }}>
            Add to cart
          </button>
          :
          <button className="custom-button out-of-stock">Out of stock</button>
        }
      </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

const mapStateToProps = createStructuredSelector({
  uniqItems: selectCartItems
});

export default connect(mapStateToProps, mapDispatchToProps) (CollectionItem);
