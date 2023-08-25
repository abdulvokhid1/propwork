import React, { useState } from "react";

const Add = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [published, setPublished] = useState("");

  const onSubmit = () => {
    console.log(name, author, published);
  };
  return (
    <div>
      <input
        value={name}
        onClick={(e) => setName(e.target.value)}
        placeholder="name"
        name={"name"}
      />
      <input
        // value={author}
        onClick={(e) => setAuthor(e.target.value)}
        placeholder="author"
        name={"author"}
      />
      <input
        // value={published}
        onClick={(e) => setPublished(e.target.value)}
        placeholder="published"
        name={"published"}
      />
      <button onClick={onSubmit}>Add new Movie</button>
    </div>
  );
};

export default Add;
