import { createContext, useState } from "react";

export const MovieContext = createContext();

const CountContextProvider = (props) => {
  const [data, setData] = useState([
    { name: "Harry Potter", published: "1998", author: "J.K.Rowling" },
    { name: "Avata", published: "2009", author: "Stephen Lyan" },
    { name: "", published: "1998", author: "J.K.Rowling" },
    { name: "Harry Potter", published: "1998", author: "J.K.Rowling" },
    { name: "Harry Potter", published: "1998", author: "J.K.Rowling" },
  ]);
  return (
    <MovieContext.Provider value={[data, setData]}>
      {props.children}
    </MovieContext.Provider>
  );
};
export default CountContextProvider;
