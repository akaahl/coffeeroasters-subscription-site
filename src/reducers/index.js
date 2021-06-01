import modalActive from "./modalActive";
import coffeeState from "./coffeeState";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  coffee: coffeeState,
  isModalActive: modalActive,
});

export default allReducers;
