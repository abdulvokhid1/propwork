import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      console.error("you sent wrong value");
  }
};

const App = () => {
  // useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <label htmlFor="">type something you wanna do</label> <input />
      {/* <button onClick={() => dispatch({ type: "increment" })}>+</button>
      {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button> */}
    </div>
  );
};
export default App;
