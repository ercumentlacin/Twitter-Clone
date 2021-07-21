export const actionLogin = (user) => ({
  type: 'LOGIN',
  payload: user,
});

export const actionLogout = () => {
  return {
    type: 'LOGOUT',
  };
};

export const login = (user) => (dispatch) =>
  dispatch({
    type: 'LOGIN',
    payload: user,
  });
