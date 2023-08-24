import React, { useContext } from "react";
import { MovieContext } from "../../context/movieContext";

const Card = ({ name, published, id, author }) => {
  const [data, setData] = useContext(MovieContext);
  return (
    <div
      style={{
        height: "200px",
        width: "200px",
        border: "1px solid black",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        margin: "20px 0",
      }}>
      <h3>{name}</h3>
      <p>{published}</p>
      <p>{author}</p>
      <button>edit</button>
      <button onClick={() => setData(data.filter((value) => value.id !== id))}>
        delete
      </button>
    </div>
  );
};

export default Card;
