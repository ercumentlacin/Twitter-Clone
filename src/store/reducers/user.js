const initialStage = {
  user: null,
};

function userReducer(state = initialStage, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };

    default:
      return state;
  }
}

export default userReducer;
