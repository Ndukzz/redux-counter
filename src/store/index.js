// import { createStore } from "redux";

// const initialState = {
//   counter: 0,
//   toggleCounter: true,
// };

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   }
//   if (action.type === "increaseBy5") {
//     return {
//       ...state,
//       counter: state.counter + action.payload
//     }
//   }
//   if (action.type === "toggleCounter") {
//     return {
//       ...state,
//       toggleCounter: !state.toggleCounter,
//     };
//   }
//   return state;
// };

// const store = createStore(counterReducer);

// export default store;
