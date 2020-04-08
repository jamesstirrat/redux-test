//before creating store we create package.json file to store our redux dependency

//in our store we need to create
//1. the store (first creating the constant that will require redux)
//2. the initial state of the properties
//3. a reducer, which takes a state and an action
//4. conditional state changes based on dispatch
//5. a dispatch to test our reducer
//6. establish the store with our store constant with reducer as params. we can subscribe to store to log to console state changes once they are processed.

//JSON.stringify converts a JS object into a JSON string. JSON is used to generate data structure from user input and to transfigure data from server to client and so on.
//.subscribe is a change listener and when paired with console.log it prints state changes to the console
//.dispatch is an action that is used in the reducer to change the state

//creating a store. We only need one per application
const { createStore } = require('redux');

//creating our initial states
const initialState = {
  age:21
};

//creating reducer. The function that determines state changes to application.
const myReducer = (state = initialState, action) => {
  const newState = {...state};

  if(action.type === 'ADD'){
    newState.age += 1;
  }
  if(action.type === 'SUBTRACT'){
    newState.age -= 1;
  }

  return newState;
};

const store = createStore(myReducer);
store.subscribe(() => {
  console.log('state changed' + JSON.stringify(store.getState()))
})

store.dispatch({type: 'ADD'});
