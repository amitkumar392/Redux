
//import redux library 
const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

//for middle ware
const reduxLogger = require('redux-logger')
//redux-logger is a middelware
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;




// first we  define string constant that indicate the type of action
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM="BUY_ICECREAM"

/**
 * action is a object which has type property
 *  this action object

 */
// {
//   type: BUY_CAKE;
//   info: "first redux action ";
// }

/**
 * action creator : simply create an action.
 * it is a fuction that return action object
 * Action
 */

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first redux action ",
  };
}



function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "second redux action ",
  };
}

//initial state

const initialCakeState ={
  noOfCakes: 10,
}

const initialIceCreamState = {
  noOfIceCream: 20,
}



/**
 * pure reducer
 * @param {*} state
 * @param {*} action
 * (previous state, action)=> newState
 */
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
     
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    
      case BUY_ICECREAM:
        return {
          ...state,
          noOfIceCream: state.noOfIceCream - 1
        }
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  cake:cakeReducer,
  iceCream:iceCreamReducer
})

const store = createStore(rootReducer,applyMiddleware(logger));
// console.log("intial state", store.getState());
const unsubscribe = store.subscribe(() =>{})
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe();
