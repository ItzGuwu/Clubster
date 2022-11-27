import React from "react";
import ReactDOM from "react-dom/client";
import "semantic-ui-css/semantic.min.css";
import "./Styles/index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

function Render() {
  return root.render(<App />);
}

Render();

// If you want to start measuring performance in your app, pass a function
// to lend to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
