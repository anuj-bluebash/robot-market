import React from 'react';
import { connect } from 'react-redux';
import { addItem }from '../../redux/cart/cart.actions.js';

import './collection-item.styles.scss';


const CollectionItem = ({item, addItem}) => {
    const {name, price, image: imageUrl } = item;
    return (
      <div className="collection-item">
        <img src={imageUrl}
          className="image"
        />
        <div className="collection-footer">
          <span className="name"> {name} </span>
          <span className="price"> {price} </span>
        </div>

        <button className="custom-button" onClick={ () =>  addItem(item)}>Add to cart</button>
      </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps) (CollectionItem);
