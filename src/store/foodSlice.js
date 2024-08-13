import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  foodList: [],
  nextId: 1,
  cartList: [],
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
      console.log('action===>', action);

      state.cartList.push(action.payload);
      //state.cartId += 1;
    },
    clearAddFood: state => {
      return initialState;
    },
  },
});

export const {addFood, clearAddFood, submitCartItem} = foodSlice.actions;

export default foodSlice.reducer;
