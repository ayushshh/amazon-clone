// Re-exports cart actions from the central store so imports like
// '../../redux/actions/actions' work as expected by the GitHub source code
export { addToCart, removeFromCart, clearCart } from '../../store/store';
