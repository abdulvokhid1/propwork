import { createContext, useState } from "react";

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const [data, setData] = useState([
    { id: 1, name: "Harry Potter", published: 1998, author: "J.K.Rowling" },
    { id: 2, name: "Avata", published: 2009, author: "Stephen Lyan" },
    { id: 3, name: "Qunduz Amaki", published: 1998, author: "Qunduz Amaki" },
    { id: 4, name: "Ujas", published: 2005, author: "Unknown" },
  ]);
  return (
    <MovieContext.Provider value={[data, setData]}>
      {props.children}
    </MovieContext.Provider>
  );
};
export default MovieContextProvider;
