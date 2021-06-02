import modalActive from "./modalActive";
import {
  coffeeMethod,
  quantity,
  coffeeType,
  grindOption,
  delivery,
} from "./coffeeReducers";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  coffeeMethod: coffeeMethod,
  coffeeType: coffeeType,
  quantity: quantity,
  grindOption: grindOption,
  delivery: delivery,
  isModalActive: modalActive,
});

export default allReducers;
