import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalSty from "./styles/global.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalSty />
    <App />
  </React.StrictMode>
);
