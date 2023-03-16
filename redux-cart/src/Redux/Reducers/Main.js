import { combineReducers } from "redux";
import { cartreducer } from "./Reducer";

const root = combineReducers({
  cartreducer,
});

export default root;
