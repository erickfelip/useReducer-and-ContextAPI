export const INITIAL_STATE = {
  squares: Array(9).fill(null),
  isXNext: true,
  whoIsWinner: "",
  history: [],
};
//sempre retornar o estado do reducer para não quebrar a aplicação
//sempre copiar o estado, não manipular o estado diretamente
export default function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_SQUARES": {
      const { squares, isXNext, whoIsWinner, history } = state;
      const newHistory = [
        ...history,
        {
          squares,
          isXNext,
          whoIsWinner,
        },
      ];
      const newState = { ...state };
      newState.squares = action.payload;
      newState.isXNext = !isXNext;
      newState.whoIsWinner = whoIsWinner;
      newState.history = newHistory;
      return newState;
    }
    case "UPDATE_WINNER": {
      return { ...state, whoIsWinner: action.payload };
    }
    case "UPDATE_HISTORY": {
      const [history, index] = action.payload;
      const { squares, whoIsWinner, isXNext } = history[index];
      const newHistory = [...history];
      newHistory.splice(index, history.length);
      const newState = {
        ...state,
        squares,
        whoIsWinner,
        isXNext,
        history: newHistory,
      };
      return newState;
    }
    case "RESET": {
      return INITIAL_STATE;
    }
  }
}
