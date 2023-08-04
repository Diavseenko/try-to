import { legacy_createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_KOMPOSE__
   ? window.__REDUX_DEVTOOLS_EXTENSION_KOMPOSE__
   : compose;

export default legacy_createStore(reducers, enhancers(applyMiddleware(thunk)));