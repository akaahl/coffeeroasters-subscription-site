const modalReducer = (state = false, action) => {
  switch (action.type) {
    case "ACTIVATE":
      return true;
    case "DEACTIVATE":
      return false;
    default:
      return state;
  }
};

export default modalReducer;
