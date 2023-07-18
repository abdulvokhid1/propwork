import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  // switch (action.type) {
  //   case "increment":
  //     return { count: state.count + 1 };
  //   case "decrement":
  //     return { count: state.count - 1 };
  //   default:
  //     console.error("you sent wrong value");
  // }
  console.log(action);

  switch (action.type) {
    case "addNewTodo":
      return {
        data: [
          ...state.data,
          {
            id: state.data.length + 1,
            toDoName: action.payload.toDoName,
            completed: false,
          },
        ],
      };
    case "inputcheckbox":
      return {
        data: state.data.map((value) =>
          value.id === action.payload.id
            ? { ...value, completed: action.payload.value }
            : value
        ),
      };
    case "deletetodo":
      return {
        data: state.data.filter((value) => value.id !== action.payload.id),
      };
    case "erase":
      return {
        data: [],
      };
    default:
  }
};

const App = () => {
  const [addValue, setAddValue] = useState("");

  // useReducer
  //       key    changekey              function    initial value in object
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
        <label htmlFor="">type something you wanna do</label>{" "}
        <input value={addValue} onChange={(e) => setAddValue(e.target.value)} />
        <button
          onClick={() => {
            setAddValue("");
            dispatch({
              type: "addNewTodo",
              payload: { toDoName: addValue },
            });
          }}
        >
          {" "}
          Add
        </button>
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
            <input
              onChange={() =>
                dispatch({
                  type: "inputcheckbox",
                  payload: { id: value.id, value: !value.completed },
                })
              }
              checked={value.completed}
              type="checkbox"
            />
            <p>{value.toDoName}</p>
            <button
              onClick={() =>
                dispatch({ type: "deletetodo", payload: { id: value.id } })
              }
            >
              delete
            </button>
          </div>
        ))}
        <div>
          {state.data.length >= 1 ? (
            <button onClick={() => dispatch({ type: "erase" })}>
              Erase all
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* <button onClick={() => dispatch({ type: "increment" })}>+</button>
      {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button> */}
    </div>
  );
};
export default App;
