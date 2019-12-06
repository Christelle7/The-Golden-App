import { connect } from 'react-redux';
import { addToCart, removeFromCart, submitCart } from "../actions/actions";
import Cart from '../components/layout/Cart';


const mapStateToProps = (state) => {
  console.log(state)
  return {
    cart: state.addToCart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
    removeFromCart: (index) => dispatch(removeFromCart(index)),
    submitCart: (items) => dispatch(submitCart(items))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);