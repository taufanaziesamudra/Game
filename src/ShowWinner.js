import React from "react";
function ShowWinner({ winner = 0 }) {
  const text = {
    "-1": "Kamu Menang!",
    0: "Seri",
    1: "Kamu Kalah!",
  };

  return <h2>{text[winner]}</h2>;
}

export default ShowWinner;
