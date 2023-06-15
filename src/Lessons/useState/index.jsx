import React, { useState } from "react";

const Home = () => {
  const [count, setCount] = useState({
    name: "",
    surname: "",
    address: "",
  });

  const changeInpuName = (e) => {
    setCount({
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      {/* <button
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
      </button> */}
      <div>
        <input
          name="name"
          type="text"
          placeholder="name"
          onChange={changeInpuName}
        />
        <br />
        <input
          name="surname"
          type="text"
          placeholder="surname"
          onChange={changeInpuName}
        />
        <br />
        <input
          name="address"
          type="text"
          placeholder="address"
          onChange={changeInpuName}
        />
        {JSON.stringify(count)}
      </div>
    </div>
  );
};
export default Home;
