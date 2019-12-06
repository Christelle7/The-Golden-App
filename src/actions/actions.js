import { connect } from 'react-redux';
import axios from "axios";

export function addToCart(item) {
  (console.log(item))
  return {
    type: "ADD_ITEM",
    value: item
  }
}

export function removeFromCart(index) {
  console.log(index)
  return {
    type: "REMOVE_INDEX",
    value: index
  }
}

export function submitCart(items) {
  console.log(items, "Christelle")
  return dispatch => {
    return axios({
      url: '/cart',
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify(items)
    })
      .then(res => {
        dispatch({
          type: "SUBMIT_CART",
          value: items
        })
      })
  }
}