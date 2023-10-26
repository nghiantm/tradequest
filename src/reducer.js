import { combineReducers } from "@reduxjs/toolkit";

import auth from "./reducers/auth";
import trading from "./reducers/trading";
import account from "./reducers/account";

export default combineReducers({
    auth,
    trading,
    account
});