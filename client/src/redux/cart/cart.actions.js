import { cartActionTypes } from "./cart.types";

export const toggleDropDown = () => ({
  type: cartActionTypes.TOGGLE_DROPDOWN
});

export const addItem = item => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item
});
