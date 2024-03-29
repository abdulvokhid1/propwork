import React, { useContext, useState } from "react";
import { MovieContext } from "../../context/movieContext";

const Card = ({ name, published, id, author }) => {
  const [data, setData] = useContext(MovieContext);
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState({ name, author, published });
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
      <h3>
        {" "}
        {show ? (
          <input
            value={info.name}
            onChange={(e) => {
              setInfo({ ...info, name: e.target.value });
            }}
          />
        ) : (
          name
        )}
      </h3>
      <p>
        {show ? (
          <input
            value={info.author}
            onChange={(e) => {
              setInfo({ ...info, author: e.target.value });
            }}
          />
        ) : (
          published
        )}
      </p>
      <p>
        {show ? (
          <input
            value={info.published}
            onChange={(e) => {
              setInfo({ ...info, published: e.target.value });
            }}
          />
        ) : (
          author
        )}
      </p>
      {show ? (
        <button onClick={() => setShow(false)}>save</button>
      ) : (
        <button onClick={() => setShow(true)}>edit</button>
      )}
      <button onClick={() => setData(data.filter((value) => value.id !== id))}>
        delete
      </button>
    </div>
  );
};

export default Card;
