import React, { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

export function Winner() {
  const {
    state: { whoIsWinner },
  } = useContext(GameContext);

  if (!whoIsWinner) return <p></p>;
  return <p className="winner">{whoIsWinner} Venceu!</p>;
}
