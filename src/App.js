import React, { useReducer, useState } from "react";
import reducer from "./reducer/reducer";
import {
  incrementAction,
  decrementAction,
  resetAction,
  incrementByValue,
  decrementByValue
  // incrementActionByValue
} from "./reducer/action";
// const reducerFunction = (state, action) => {
//   if (action.type === "INCREMENT_COUNT") {
//     return state + 1;
//   }
//   if (action.type === "DECREMENT_COUNT") {
//     return state - 1;
//   }
//   if (action.type === "RESET_COUNT") {
//     return 0;
//   }
//   return state;
// };

const App = () => {
  const [state, dispatch] = useReducer(reducer, 1);

  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <h1>Count : {state.count}</h1>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      {/* temp() */}
      <button onClick={() => dispatch(incrementAction)}>INCREMENT</button>
      <button onClick={() => dispatch(decrementAction)}>DECREMENT</button>
      <button onClick={() => dispatch(resetAction)}>RESET</button>
      {/* incrementByValue(10)
        {
          type: "INCREMENT_COUNT_BY_VALUE",
          payload: 10
        }
      */}
      <button onClick={() => dispatch(incrementByValue(inputValue))}>
        INCREMENT BY VALUE
      </button>

      <button onClick={() => dispatch(decrementByValue(inputValue))}>
        DECREMENT BY VALUE
      </button>
    </>
  );
};
export default App;
