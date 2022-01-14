import { handleAPI } from '../../utils/api.utils'


export const productsLoad = () => {
  const url = `/api/robots`;
  const method = 'GET'

  return {
    type: 'PRODUCTS_LOAD',
    payload: handleAPI(url, {}, method)
  };
}
