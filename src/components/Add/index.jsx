import React, { useContext, useState } from "react";
import { MovieContext } from "../../context/movieContext";

const Add = () => {
  const [data, setData] = useContext(MovieContext);

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [published, setPublished] = useState("");

  const onSubmit = () => {
    if (name === "" || author === "" || published === "") {
      alert("fill in all blanks");
    } else {
      setData([
        ...data,
        {
          id: data.length,
          name: name,
          author: author,
          published: published,
        },
      ]);
    }
    // console.log(name, author, published);
  };
  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
        name={"name"}
      />
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="author"
        name={"author"}
      />
      <input
        value={published}
        onChange={(e) => setPublished(e.target.value)}
        placeholder="published"
        name={"published"}
      />
      <button onClick={onSubmit}>Add new Movie</button>
    </div>
  );
};

export default Add;
