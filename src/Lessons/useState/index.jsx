import React, { useState } from "react";

const Home = () => {
  const [count, setCount] = useState({
    name: "",
    surname: "",
    address: "",
  });
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        decrease
      </button>
      <div>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => {
            setCount({
              name: e.target.value,
              surname: count.surname,
              address: count.address,
            });
          }}
        />
        <br />
        <input
          type="text"
          placeholder="surname"
          onChange={(e) => {
            setCount({
              name: count.name,
              surname: e.target.value,
              address: count.address,
            });
          }}
        />
        <br />
        <input
          type="text"
          placeholder="address"
          onChange={(e) => {
            setCount({
              name: count.name,
              surname: count.surname,
              address: e.target.value,
            });
          }}
        />
        {JSON.stringify(count)}
      </div>
    </div>
  );
};
export default Home;
