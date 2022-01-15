import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selectors'
import { productsLoad } from '../../redux/shop/shop.actions'

import CollectionItem from '../collection-item/collection-item.component';


import './collections.overview.styles.scss'

const CollectionsOverview = ({ collections, productsLoad }) => {
  useEffect((props) => {
    productsLoad()
  }, [])
  return(
    <div className={'collections-overview'}>
      {collections.map((item) => (
        <CollectionItem key={item.name} item={item} />
      ))}
    </div>
  )}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
})

const mapDispatchToProps = dispatch => ({
  productsLoad: ()=> dispatch(productsLoad()),
})



export default connect(mapStateToProps, mapDispatchToProps)(CollectionsOverview)
