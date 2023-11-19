import classes from "./Counter.module.css";

import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);   //  pulling a slice of state from the store
  const toggleCounter = useSelector(state => state.toggleCounter)
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({type: "toggleCounter"})
  };
  const incrementHandler = () => {
    dispatch({ type: "increment" }); // dispatching the increment action
  };
  const increaseBy5 = () => {
    dispatch({ type: "increaseBy5", payload: 5 }); // dispatching the increment action
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement"})
  };    

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { toggleCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseBy5}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
