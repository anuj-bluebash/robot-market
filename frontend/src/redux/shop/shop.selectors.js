import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectMaterials = createSelector(
  [selectShop],
  shop => [...new Set(shop.collections.map(item => item.material))]
);
