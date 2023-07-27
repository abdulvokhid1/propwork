import { createContext } from "react";

export const CountContext = createContext();
const CountContextProvider = () => {
  return <CountContext.Provider></CountContext.Provider>;
};
export default CountContextProvider;
