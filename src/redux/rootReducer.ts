import { combineReducers } from "redux";
import authReducer from "./reducers/authSlice/authReducer"; // Import your reducers
import errReducer from "./reducers/errSlice/errReducer";

const rootReducer = combineReducers({
  // Add your reducers here
  authSlice: authReducer,
  errSlice: errReducer,
});

export default rootReducer;
