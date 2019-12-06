import { combineReducers } from 'redux';
import store from '../store';


const addToCart = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.value]
    case "REMOVE_INDEX":
      state.splice(action.value, 1)
      return [...state]
    default:
      return state
  }
}
/*const removeFromCart = (state = [], action) => {
  console.log(action,state)
  switch (action.type) {
    case "REMOVE_INDEX":
      state.splice(action.value,1)
      return [...state]
    default:
      return state
  }
}*/
const submitCart = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case "SUBMIT_CART":
      return [...state, action.value]
    default:
      return state
  }
}


export default combineReducers({
  addToCart, //removeFromCart
})

