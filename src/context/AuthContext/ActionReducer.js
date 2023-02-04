const ActionReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true, payload: action.payload };
    case "LOGOUT":
      return { ...state, isAuthenticated: false, payload: action.payload };
    default:
      return state;
  }
};

export default ActionReducer;
