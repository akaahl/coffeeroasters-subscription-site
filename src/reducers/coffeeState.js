const coffeeReducer = (state = null, action) => {
  switch (action.type) {
    case 1:
      return "Capsule";
    case 2:
      return "Filter";
    case 3:
      return "Espresso";

    default:
      return state;
  }
};

export default coffeeReducer;
