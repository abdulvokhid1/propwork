import React, { useState } from "react";
import { useEffect } from "react";

const AppuseEffect = () => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  return (
    <div>
      <div>
        {response.map((value)=>{
          return 
        })}
      </div>
    </div>
  );
};
export default AppuseEffect;
