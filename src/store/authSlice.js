import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  registeredData: [],
  userId: 1,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    storeRegisterData: (state, action) => {
      console.log('action====>', action);
      console.log('state====>', state);

      if (!Array.isArray(state.registeredData)) {
        state.registeredData = [];
      }

      const newUser = {
        id: state.userId,
        ...action.payload,
      };

      console.log('newUser===>', newUser);
      state.registeredData.push(newUser); // Add new user to registeredData
      state.userId += 1; // Increment the userId
    },

    isLogginStarted: state => {
      state.isAuthenticated = false;
    },
    isLogginSuccess: state => {
      state.isAuthenticated = true;
    },
    isLogginFail: state => {
      state.isAuthenticated = false;
    },
    logout: state => {
      state.isAuthenticated = false;
    },
  },
});

export const {
  storeRegisterData,
  isLogginStarted,
  isLogginSuccess,
  isLogginFail,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
