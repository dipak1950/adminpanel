import { ADD_PRODUCT_SUCCESS, CREATE_PRODUCT, DELETE_PRODUCT, GET_PRODUCT, GET_PRODUCTS, GET_PRODUCT_SUCCESS, IS_LOADING, UPDATE_PRODUCT } from "../Constant/ActionTypes";

const initialState = {
    products: [],
    product: {},
    isLoading: false,
    isEdit: false,
    totalPrice: 0,
    addSuccess: false
}

const ProductReducer = (state = initialState, action) => {

    switch (action.type) {

        case CREATE_PRODUCT:
            return state
            break;

        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                isLoading: false,
                isEdit: false,
                addSuccess: false,
                product: {}
            }
            break;

        case GET_PRODUCT:
            return {
                ...state,
                product: action.payload,
                addSuccess: false,
                isEdit: true
            }
            break;


        case UPDATE_PRODUCT:
            return {
                ...state,
                addSuccess: false,
                isEdit: false
            }
            break;

        case IS_LOADING:
            return {
                ...state,
                addSuccess: false,
                isLoading: true
            }
            break;

        case DELETE_PRODUCT:
            return {
                ...state,
                isLoading: false,
                addSuccess: false
            }

        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                addSuccess: true
            }
            break;

        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isEdit: false,
                addSuccess: false,
                products: action.payload,
                totalPrice: action.payload.reduce((acc, curVal) => {
                    return acc + parseInt(curVal.price)
                }, 0)
            }
            break;

        default:
            return state;
    }
}

export default ProductReducer;