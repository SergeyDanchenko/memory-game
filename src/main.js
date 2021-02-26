import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

import './styles/main.scss';

ReactDOM.render(<App />, document.getElementById("root"));

document.addEventListener('keyup', (event) => {
  if (event.key === 'Escape') {
    document.documentElement.requestFullscreen();
  }
});