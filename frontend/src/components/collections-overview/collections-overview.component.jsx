import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections, selectMaterials } from '../../redux/shop/shop.selectors'
import { productsLoad } from '../../redux/shop/shop.actions'

import CollectionItem from '../collection-item/collection-item.component';


import './collections.overview.styles.scss'

const CollectionsOverview = ({ collections, materials, productsLoad }) => {
  const [material, setMaterial] = useState('');

  useEffect((props) => {
    productsLoad()
  }, [])

  return(
    <div className="collections-overview">
      <select onChange={(e)=> setMaterial(e.target.value)}>
        <option selected value=''>Select Material</option>
        {materials.map((material) => (
          <option value={material}>{material}</option>
        ))}
      </select>
      <div className="items">
        {collections.filter(item => material == '' || item.material === material).map((item) => (
          <CollectionItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  )}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
  materials: selectMaterials
})

const mapDispatchToProps = dispatch => ({
  productsLoad: ()=> dispatch(productsLoad()),
})



export default connect(mapStateToProps, mapDispatchToProps)(CollectionsOverview)
