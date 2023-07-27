import React, { useContext } from "react";
import { CountContext } from "./Lessons/useContext/CountContext";
const App = () => {
  const value = useContext(CountContext);
  return <div>hello world </div>;
};
export default App;
