import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  toggleCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increase(state) {
      state.counter++;
    },
    decrease(state) {
      state.counter--;
    },
    increaseBy5(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.toggleCounter = !state.toggleCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
