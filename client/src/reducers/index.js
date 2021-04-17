import { combineReducers } from "redux";

import signIn from "./signIn-reducer";
import signUp from "./signUp-reducer";

export default combineReducers({ signIn, signUp });
