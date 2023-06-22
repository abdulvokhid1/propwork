import React, { useState } from "react";
import { useEffect } from "react";

const AppuseEffect = () => {
  const [getresponse, setgetResponse] = useState([]);
  const [postCount, setPostCount] = useState(10);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${postCount}`)
      .then((response) => response.json())
      .then((json) => setgetResponse(json));
  }, [postCount]);
  return (
    <div>
      <div>
        {getresponse.map((value) => {
          return (
            <div style={{ display: "flex" }} key={value.id}>
              <h1>{value.id}</h1>
              <h1>{value.title}</h1>
            </div>
          );
        })}
      </div>
      <button onClick={() => setPostCount(postCount + 10)}>add 10</button>
    </div>
  );
};
export default AppuseEffect;
