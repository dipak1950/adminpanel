import Api from "../../Api/index";
import { ADD_PRODUCT_SUCCESS, CREATE_PRODUCT, DELETE_PRODUCT, GET_PRODUCT, GET_PRODUCTS, GET_PRODUCT_SUCCESS, IS_LOADING, UPDATE_PRODUCT } from "../Constant/ActionTypes";

export const createproduct = (data) => {
    return {
        type: CREATE_PRODUCT,
        payload: data
    }
}

export const createproductAsync = (data) => {

    return async (dispatch) => {

        const result = await Api.post("/products", data)

        dispatch(getproductsAsync());
    }
}

export const getproducts = (data) => {
    return {
        type: GET_PRODUCTS,
        payload: data
    }
}

export const getproductsAsync = () => {

    return async dispatch => {

        // dispatch(isloading())

        const result = await Api.get("/products")

        dispatch(getproducts(result.data))
    }
}

export const getproduct = (data) => {
    return {
        type: GET_PRODUCT,
        payload: data
    }
}

export const getproductAsync = (id) => {

    return async dispatch => {

        const result = await Api.get(`/products/${id}`)

        dispatch(getproduct(result.data))
    }
}

export const isloading = () => {
    return {
        type: IS_LOADING
    }
}

export const Updateproduct = (data) => {
    return {
        type: UPDATE_PRODUCT,
        payload: data
    }
}

export const updateproductAsync = (data) => {

    return async dispatch => {

        const result = await Api.put(`/products/${data.id}`, data)
        // console.log(result.data);

        dispatch(getproductsAsync(result.data))
    }
}

export const Deleteproduct = () => {
    return {
        type: DELETE_PRODUCT
    }
}

export const DeleteproductAsync = (id) => {

    return async dispatch => {

        dispatch(isloading())

        const result = await Api.delete(`/products/${id}`)

        dispatch(getproductsAsync())
    }
}

// Total Price

export const addproductsuccess = () => {
    return {
        type: ADD_PRODUCT_SUCCESS
    }
}

export const addproductAsync = (data) => {

    return dispatch => {
        Api.post("/products", data).then(() => {
            dispatch(addproductsuccess())
        }).then(() => {
            dispatch(getproductAsync())
        }).catch((err) => {
            console.log(err, "err");
        })
    }
}

export const getproductsuccess = (data) => {
    return {
        type: GET_PRODUCT_SUCCESS,
        payload: data
    }
}

export const getproductpriceAsync = () => {

    return dispatch => {
        Api.get("/products").then((res) => {
            const data = res.data
            console.log(data);
            dispatch(getproductsuccess(data))
        }).catch((err) => {
            console.log(err, "err");
        })
    }
}
