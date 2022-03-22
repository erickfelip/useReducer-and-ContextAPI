import React, { createContext, useReducer } from "react";
import GameReducer, { INITIAL_STATE } from "./GameReducer";

export const GameContext = createContext();

export function GameContextProvider({ children }) {
  const [state, dispatch] = useReducer(GameReducer, INITIAL_STATE);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}
//state => estado atual da aplicação.
//dispatch => função de disparo de ações para o reducer atualizar o estado.
