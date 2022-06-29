import {
  UPLOAD_DEVICES
} from "./actions";
import { DEVICES_INITIAL_STATE } from "../../Configuration/index";
const initial_state = {devices: DEVICES_INITIAL_STATE} 
//console.log(initial_state);

export function devices(state = initial_state, action) {
  switch (action.type) {
    case UPLOAD_DEVICES:
        //console.log(action)
        return {
          devices: action.payload
        }
    default:
      return state;
  }
}
