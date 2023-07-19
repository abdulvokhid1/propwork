import React, { useReducer } from "react";
import mockData from "../../mock/data";
import { act } from "react-dom/test-utils";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "searchvalue":
//       return {
//         data: mockData.filter((value) => {
//           return value.title
//             .toLowerCase()
//             .includes(action.payload.searchValue.toLowerCase());
//         }),
//       };
//     default:
//   }
// };
// const Example = () => {
//   const [state, dispatch] = useReducer(reducer, { data: mockData });
//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1 style={{ textAlign: "center" }}>My Blogs</h1>
//       <input
//         type="text"
//         placeholder="type something"
//         onChange={(e) =>
//           dispatch({
//             type: "searchvalue",
//             payload: {
//               searchValue: e.target.value,
//             },
//           })
//         }
//       />
//       {state.data.map((value) => (
//         <div
//           key={value.id}
//           style={{
//             border: "1px solid black",
//             width: "400px",
//             height: "400px",
//             margin: "20px auto",
//           }}
//         >
//           <img style={{ width: "100px", height: "100px" }} src={value.url} />
//           <h1>{value.title}</h1>
//           <p>{value.definition}</p>
//           <p>{value.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default Example;

const reducer = (state, action) => {
  switch (action.type) {
    case "delete":
      return {
        data: state.data.filter((value) => {
          return value.id !== action.payload.id;
        }),
      };
    case "addvaluename":
      return {
        ...state,
        addValueCollector: {
          ...state.addValueCollector,
          [action.payload.name]: action.payload.nameValue,
        },
      };
    case "addinputvalue":
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: new Date().getTime(),
            ...action.payload,
          },
        ],
      };
    case "edituser":
      return {
        ...state,
        isSelected: true,
        selectedValue: { ...action.payload },
      };
    case "edituservalue":
      return {
        ...state.selectedValue,
        [action.payload.name]: action.payload.editValue,
      };
    default:
      return state;
  }
};
const Example = () => {
  const [state, dispatch] = useReducer(reducer, {
    data: [
      {
        id: 1,
        name: "abdulvokhid",
        surname: "ibrakhimov",
      },
      {
        id: 2,
        name: "olimjon",
        surname: "gulomov",
      },
    ],
    addValueCollector: {
      name: "",
      surname: "",
    },
    isSelected: false,
    selectedValue: {},
  });

  return (
    <div>
      <input
        onChange={(e) =>
          dispatch({
            type: "addvaluename",
            payload: { nameValue: e.target.value, name: "name" },
          })
        }
        placeholder="add new name"
      />
      <input
        value={state.surname}
        onChange={(e) =>
          dispatch({
            type: "addvaluename",
            payload: { nameValue: e.target.value, name: "surname" },
          })
        }
        placeholder="add new surname"
      />
      <button
        onClick={() =>
          dispatch({
            type: "addinputvalue",
            payload: {
              name: state.addValueCollector.name,
              surname: state.addValueCollector.surname,
            },
          })
        }
      >
        add new value
      </button>
      {state.data.map((value) => {
        return (
          <div
            key={value.id}
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <div>
              {state.isSelected && value.id === state.selectedValue.id ? (
                <input
                  value={state.selectedValue.name}
                  onChange={(e) =>
                    dispatch({
                      type: "edituservalue",
                      payload: { name: "name", editValue: e.target.value },
                    })
                  }
                />
              ) : (
                value.name
              )}
              {state.isSelected && value.id === state.selectedValue.id ? (
                <input
                  value={state.selectedValue.surname}
                  onChange={(e) =>
                    dispatch({
                      type: "edituservalue",
                      payload: { name: "surname", editValue: e.target.value },
                    })
                  }
                />
              ) : (
                value.surname
              )}
            </div>
            <button
              onClick={() => {
                dispatch({
                  type:
                    state.isSelected && value.id === state.selectedValue.id
                      ? "saveuser"
                      : "edituser",
                  payload: { ...value },
                });
              }}
            >
              {state.isSelected && value.id === state.selectedValue.id
                ? "Save"
                : "Edit"}
            </button>
            <button
              style={{ height: "30px" }}
              onClick={() =>
                dispatch({ type: "delete", payload: { id: value.id } })
              }
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Example;
