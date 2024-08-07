import {createSlice} from '@reduxjs/toolkit';

const inistalState = {
  foodList: [],
};

const foodSlice = createSlice({
  name: 'food',
  initialState: inistalState,
  reducers: {
    addFood: (state, action) => {
      console.log('action====>>', action);
      state.foodList.push(action.payload);
    },
  },
});

export const {addFood} = foodSlice.actions;

export default foodSlice.reducer;
