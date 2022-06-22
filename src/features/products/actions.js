//import axios from "axios";

//import { URL_WISHLIST } from "../../fixtures/index";

export const ADD_DEVICE = "ADD_DEVICE";
//export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";
export const ADD_TO_CART = "ADD_TO_CART";
//export const CLEAR_WISHLIST = "CLEAR_WISHLIST";
//export const CLEAR_CART = "CLEAR_CART";
//export const SET_NUMBER_OF_PRODUCT = "SET_NUMBER_OF_PRODUCT";
export const GET_DEVICES = "GET_PRODUCTS";
//export const SEARCH_VALUE_CHANGE = "SEARCH_VALUE_CHANGE";
//export const REMOVE_FROM_CART = "REMOVE_FORM_CART";

export const productCardAction = (type, payload) => {
  return {
    type: type,
    payload,
  };
};

export function add_device(id) {
  return{
    type: ADD_DEVICE,
    payload: id,
  }
}

// export function removeFromWishlist(id) {
//   return (dispatch) => {
//     //axios.delete(`${URL_WISHLIST}/${id}`);
//     dispatch(productCardAction(REMOVE_FROM_WISHLIST, id));
//   };
// }

// export function addToCart(product) {
//   const prevState = JSON.parse(localStorage.getItem("cart")) || [];
//   localStorage.setItem("cart", JSON.stringify([...prevState, product]));

//   return (dispatch) => {
//     dispatch(productCardAction(ADD_TO_CART, product));
//   };
// }

// export function removeFromCart(uniqId) {
//   const newState = JSON.parse(localStorage.getItem("cart")).filter(
//     (product) => product.uniqId !== uniqId
//   );
//   localStorage.setItem("cart", JSON.stringify(newState));

//   return (dispatch) => {
//     dispatch(productCardAction(REMOVE_FROM_CART, uniqId));
//   };
// }

export function getDevices(url) {
  //return (dispatch) => {
    // axios.get(url).then((res) => {
    //   dispatch(productCardAction(GET_DEVICES, res.data));
    // });
  //return(  dispatch(productCardAction(GET_DEVICES, res.data)))
     // const pcbs =
  return( (productCardAction(GET_DEVICES )))
}
