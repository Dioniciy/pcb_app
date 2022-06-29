import {applyMiddleware, combineReducers, createStore} from "redux";
import {devices} from "../features/products/reducer";

import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk)

const rootReducer =  combineReducers({
     devices,
})

export const store = createStore(
    rootReducer,
    undefined,
    middleware,
)

