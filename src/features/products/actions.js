import axios from "axios";



export const ADD_DEVICE = "ADD_DEVICE";
export const GET_DEVICES = "GET_PRODUCTS";
export const UPLOAD_DEVICES = "UPLOAD_DEVICES";

export const productCardAction = (type, payload) => {
  return {
    type: type,
    payload,
  };
};

export function addToWishlist() {
  
  return (dispatch) => {
    
    axios.get("http://localhost:4000/items").then( (res) => 
     {
      dispatch( upload_devices(res.data))
      }) 
  };
}

export function add_device(id) {
  return{
    type: ADD_DEVICE,
    payload: id,
  }
}

export function getDevices(url) { 
  return( (productCardAction(GET_DEVICES,url )))
}
export function upload_devices(data){
  return {
    type: UPLOAD_DEVICES,
    payload: data,
  };
}
