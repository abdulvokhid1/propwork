import React, { useContext } from "react";
import { MovieContext } from "../../context/movieContext";

const Navbar = () => {
  const [data, setData] = useContext(MovieContext);
  return (
    <div
      style={{
        margin: "auto",
        width: "90%",
        height: "100px",
        // background: "purple",
        color: "black",
        justifyContent: "space-between",
        display: "flex",
      }}>
      <h2>movie star</h2>
      <h2>movie count:{data.length}</h2>
    </div>
  );
};

export default Navbar;
