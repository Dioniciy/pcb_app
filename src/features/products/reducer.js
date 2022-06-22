import {
  GET_DEVICES,
  //ADD_TO_CART,
  //CLEAR_CART,
  //CLEAR_WISHLIST,
  ADD_DEVICE,
  //REMOVE_FROM_WISHLIST,
  //REMOVE_FROM_CART,
} from "./actions.js";
import { DEVICES_INITIAL_STATE } from "../../Configuration/index";
const initial_state = {devices: DEVICES_INITIAL_STATE} 
console.log(initial_state);

export function devices(state = initial_state, action) {
  switch (action.type) {

    case ADD_DEVICE:
      return {
        ...state,
        devices: state.devices.map((device) => {
          return device.id === action
            ? { ...device, isWished: true }
            : device;
        }),
      };
    // case REMOVE_FROM_WISHLIST:
    //   return {
    //     ...state,
    //     products: state.products.map((product) =>
    //       product.id === action.payload
    //         ? { ...product, isWished: false }
    //         : product
    //     ),
    //   };
    // case ADD_TO_CART:
    //   return {
    //     ...state,
    //     cartProducts: [...state.cartProducts, action.payload],
    //   };
    // case REMOVE_FROM_CART:
    //   return {
    //     ...state,
    //     cartProducts: state.cartProducts.filter((product) => {
    //       return product.uniqId !== action.payload;
    //     }),
    //   };
    // case CLEAR_WISHLIST:
    //   return {
    //     ...state,
    //     products: state.products.map((product) => {
    //       return {
    //         ...product,
    //         isWished: false,
    //       };
    //     }),
    //   };
    // case CLEAR_CART:
    //   return {
    //     ...state,
    //     cartProducts: (state.cartProducts = []),
    //   };
    default:
      return state;
  }
}
