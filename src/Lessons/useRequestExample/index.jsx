import React, { useReducer } from "react";
import mockData from "../../mock/data";

const reducer = (state, action) => {
  switch (action.type) {
    case "searchvalue":
      return {
        data: mockData.filter((value) => {
          return value.title.includes(action.payload.searchValue);
        }),
      };
    default:
  }
};
const Example = () => {
  const [state, dispatch] = useReducer(reducer, { data: mockData });
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ textAlign: "center" }}>My Blogs</h1>
      <input
        type="text"
        placeholder="type something"
        onChange={(e) =>
          dispatch({
            type: "searchvalue",
            payload: {
              searchValue: e.target.value,
            },
          })
        }
      />
      {state.data.map((value) => (
        <div
          key={value.id}
          style={{
            border: "1px solid black",
            width: "400px",
            height: "400px",
            margin: "20px auto",
          }}
        >
          <img style={{ width: "100px", height: "100px" }} src={value.url} />
          <h1>{value.title}</h1>
          <p>{value.definition}</p>
          <p>{value.price}</p>
        </div>
      ))}
    </div>
  );
};
export default Example;
