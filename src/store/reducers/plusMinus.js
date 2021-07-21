const initialStage = 0;

function plusMinusReducer(state = initialStage, action) {
  switch (action.type) {
    case 'PLUS':
      return state + 1;
    case 'MINUS':
      return state - 1;
    case 'RESET':
      return initialStage;

    default:
      return state;
  }
}

export default plusMinusReducer;
