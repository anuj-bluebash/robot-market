const INITIAL_STATE = {
    collections: []
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'PRODUCTS_LOAD_FULFILLED':
            return{
                ...state,
                collections: action.payload.data.data
            }

        default:
            return state;
    }
};

export default shopReducer;
