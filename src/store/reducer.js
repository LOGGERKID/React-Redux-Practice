const initialState = {
  counter: 4,
};

const storeReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "INC_COUNTER":
      newState.counter += 1;
      break;
    case "DEC_COUNTER":
      newState.counter -= 1;
      break;
    case "ADD_COUNTER":
      newState.counter += action.value;
      break;
    case "SUB_COUNTER":
      newState.counter -= action.value;
      break;

    case "RESET":
      newState.counter = initialState.counter;
      break;

    default:
      break;
  }
  return newState;
};

export default storeReducer;
