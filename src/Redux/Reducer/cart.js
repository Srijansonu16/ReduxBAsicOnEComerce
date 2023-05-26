import { ADD_TO_CART } from "../../Constants/ActionType";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return [...state, { ...action.payload, quantity: 1 }];
    }
    default:
      return state;
  }
};
export default cartReducer;
