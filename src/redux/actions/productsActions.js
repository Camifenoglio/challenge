import axios from 'axios';
import urlBack  from '../../urlBack';

const productsActions = {
    getProducts: () => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.get( urlBack + '/api/products' );
                dispatch({ type: 'GET_PRODUCTS', payload: res.data.response });
            } catch (error) {
                console.log(error)
            }
        }
    },
    getOneProduct: (id) => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.get( urlBack + `/api/products/${id.id}` );
                //console.log(res)
                dispatch({ type: 'GET_ONE_PRODUCT', payload: res.data.response });
            } catch (error) {
                console.log(error.message)
            }
        }
    },
    filterPerCategory: (input) => {
        // console.log(input)
        return async (dispatch, getState) => {
            try {
                dispatch({ type: 'FILTER_PER_CATEGORY', payload: input });
            } catch (error) {
                console.log(error)
            }
        }
    },
    filterProducts: (input) => {
        return (dispatch,getState)=>{
            dispatch({type:'FILTER_PRODUCTS', payload:input})
        }
    },
    createProduct: (formData) => {
        return async (dispatch, getState) => {
            try {
                await axios.post( urlBack + '/api/products', formData );
                //await axios.post( `http://localhost:4000/api/products`, formData );
            } catch (error) {
                console.log(error)
            }
        }
    },
    modifyProduct: (id, product) => {
        return async (dispatch, getState) => {
            try {
                await axios.put( urlBack + `/api/products/${id}` , product );
            } catch (error) {
                console.log(error)
            }
        }
    },
    deleteProduct: (id) => {
        return async (dispatch, getState) => {
            try {
                await axios.delete( urlBack + `/api/products/${id}` );
            } catch (error) {
                console.log(error)
            }
        }
    },
    addFavorite: (id) => {
        return async (dispatch, getState) => {
            try{
                const res = await axios.post( urlBack + `/api/products/favorite/${id}` );
                dispatch({ type: 'ADD_FAVORITE', payload: res.data.response })
            } catch (error) {
                console.log(error)
            }
        }
    }
}

export default productsActions;
