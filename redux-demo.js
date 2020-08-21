const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0,
};

//reducer
const storeReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case 'INC_COUNTER':
      newState.counter += 1;
      break;

    case 'ADD_COUNTER':
      newState.counter = action.value;
      break;
    default:
      break;
  }
  return newState;
};

//store
const store = createStore(storeReducer);
//subscriber
store.subscribe(()=> console.log('[Subscription]',store.getState()))

//dispatch actions
console.log(store.getState());
store.dispatch({ type: "INC_COUNTER" });
console.log(store.getState());
store.dispatch({ type: "ADD_COUNTER", value: 20 });
console.log(store.getState());
