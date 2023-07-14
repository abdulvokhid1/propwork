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
  const [state, dispatch] = useReducer(reducer, {
    data: [
      {
        id: 1,
        toDoName: "watching movie",
        completed: true,
      },
      {
        id: 2,
        toDoName: " going out",
        completed: false,
      },
      {
        id: 3,
        toDoName: " meeting friends",
        completed: true,
      },
    ],
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div className="header">
        <label htmlFor="">type something you wanna do</label> <input />
        <button>Add</button>
      </div>
      <div>
        {state.data.map((value) => (
          <div
            key={value.id}
            style={{
              display: "flex",
              textDecoration: `${value.completed ? "line-through" : "none"}`,
            }}
          >
            <input checked={value.completed} type="checkbox" />
            <p>{value.toDoName}</p>
          </div>
        ))}
      </div>
      {/* <button onClick={() => dispatch({ type: "increment" })}>+</button>
      {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button> */}
    </div>
  );
};
export default App;
