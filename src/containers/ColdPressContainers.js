import { connect } from 'react-redux';
import { addToCart } from "../actions/actions";
import ColdPress from '../components/pages/ColdPress';

const mapStateToProps = (state) => {
  console.log(state)
  return {
    cart: state.addToCart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColdPress);