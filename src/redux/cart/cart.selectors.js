import { createSelector } from 'reselect';


//createSelector arguments: first argument is an array/collection of input selectors, second is a function to return the value out of the selector

const selectCart = (state) => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);


export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((quantity, cartItem) => quantity + cartItem.quantity * cartItem.price, 0
));