import React, { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

export function History() {
  const {
    state: { history },
    dispatch,
  } = useContext(GameContext);

  function handleClick(index) {
    dispatch({
      type: "UPDATE_HISTORY",
      payload: [history, index],
    });
  }

  return (
    <div>
      {history.map((data, index) => (
        <div key={index} className="history">
          <button type="button" onClick={() => handleClick(index)}>
            Voltar para a jogada {index}
          </button>
        </div>
      ))}
    </div>
  );
}
