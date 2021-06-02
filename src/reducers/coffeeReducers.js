export const coffeeMethod = (state = null, action) => {
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

export const coffeeType = (state = null, action) => {
  switch (action.type) {
    case 1:
      return "Single Origin";
    case 2:
      return "Decaf";
    case 3:
      return "Blended";
    default:
      return state;
  }
};

export const quantity = (state = null, action) => {
  switch (action.type) {
    case 1:
      return "250g";
    case 2:
      return "500g";
    case 3:
      return "1000g";
    default:
      return state;
  }
};

export const grindOption = (state = null, action) => {
  switch (action.type) {
    case 1:
      return "Wholebean";
    case 2:
      return "Filter";
    case 3:
      return "Cafetière";
    default:
      return state;
  }
};

export const delivery = (state = null, action) => {
  switch (action.type) {
    case 1:
      return "Every week";
    case 2:
      return "Every two weeks";
    case 3:
      return "Every month";
    default:
      return state;
  }
};
