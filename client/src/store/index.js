//1//

import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import rootReducer from "../reducer"


//3//
export const store =  createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))