import modalActive from "./modalActive";
import {
  coffeeMethod,
  quantity,
  coffeeType,
  grindOption,
  delivery,
} from "./coffeeReducers";
import { combineReducers } from "redux";
import mobileModalActive from "./mobileModalActive";

const allReducers = combineReducers({
  coffeeMethod: coffeeMethod,
  coffeeType: coffeeType,
  quantity: quantity,
  grindOption: grindOption,
  delivery: delivery,
  isModalActive: modalActive,
  isMobileModalActive: mobileModalActive,
});

export default allReducers;
