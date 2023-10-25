import { combineReducers } from "@reduxjs/toolkit";

import auth from "./reducers/auth";
import trading from "./reducers/trading";

export default combineReducers({
    auth,
    trading
});