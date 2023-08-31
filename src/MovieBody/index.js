import React, { useContext } from "react";
import { MovieContext } from "../context/movieContext";
import Card from "../components/Card";

const MovieBody = () => {
  const [data, setData] = useContext(MovieContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        // flexDirection: "column",
        alignItems: "center",
      }}>
      {data.map((value) => {
        return <Card {...value} />;
      })}
    </div>
  );
};

export default MovieBody;
