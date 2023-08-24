import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import MovieContextProvider from "./context/movieContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MovieContextProvider>
    <App />
  </MovieContextProvider>
);

reportWebVitals();
