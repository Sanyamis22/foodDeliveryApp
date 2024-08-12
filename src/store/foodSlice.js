import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  foodList: [],
  nextId: 1,
  cartList: [],
  cartId: 1,
};

const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    addFood: (state, action) => {
      console.log('action====>>', action);
      const newFood = {
        id: state.nextId,
        ...action.payload,
      };
      state.foodList.push(newFood);
      state.nextId += 1;
    },
    submitCartItem: (state, action) => {
      const CartItem = {
        cartId: state.cartId,
        ...action.payload,
      };
      state.cartList.push(CartItem);
      state.cartId += 1;
    },
    clearAddFood: state => {
      return initialState;
    },
  },
});

export const {addFood, clearAddFood} = foodSlice.actions;

export default foodSlice.reducer;
