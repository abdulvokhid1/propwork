import React, { useState } from "react";
import { useEffect } from "react";

const AppuseEffect = () => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        return response.json();
      })
      .then((json) => setResponse(json));
  }, []);
  return (
    <div>
      <div>
        {response.map((value) => {
          return <div>{value.id}</div>;
        })}
      </div>
    </div>
  );
};
export default AppuseEffect;
