import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

import './styles/main.scss';

ReactDOM.render(<App />, document.getElementById("root"));

if (!localStorage.getItem('ratingCardsQuantity18')) {
  localStorage.setItem('ratingCardsQuantity18', JSON.stringify([]));
}

if (!localStorage.getItem('ratingCardsQuantity12')) {
  localStorage.setItem('ratingCardsQuantity12', JSON.stringify([]));
}

function getFullscreenElement() {
  return document.fullscreenElement;
}

function toggleFullscreen() {
  if (getFullscreenElement()) {
    document.exitFullscreen();
  } else {
    document.getElementById('root').requestFullscreen();
  }
}

document.addEventListener('keypress', (e) => {
  if (e.key === 'c' || e.key === 'с') {
    toggleFullscreen();
  }
});