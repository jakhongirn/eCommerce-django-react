import axios from 'axios'
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL
} from '../constants/productConstants'

const listProducts = () => async (dispatch) => {
    try{
        dispatch({ type: PRODUCT_LIST_REQUEST})

        const {data} = await axios.get('/api/products/')  /* Go to package.json */
            setProducts(data)

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data

            
        })

    } catch(error){
        dispatch({ 
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.messaage
            ? error.response.data.message 
            : error.message,
        })
    }
}