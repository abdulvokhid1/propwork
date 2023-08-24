import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import MovieBody from "./MovieBody";
import Add from "./components/Add";
const App = () => {
  return (
    <div>
      <Navbar />
      <MovieBody />
      <Add />
    </div>
  );
};
export default App;
