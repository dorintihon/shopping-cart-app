import { useCart } from '../context/CartContext.jsx';

function Cart() {
  const { cartItems, removeFromCart, reduceQuantity, addToCart } = useCart();
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.title} - ${item.price} x {item.quantity}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
              <button onClick={() => reduceQuantity(item.id)}>-</button>
              <button onClick={() => addToCart(item)}>+</button>
            </li>
          ))}
        </ul>
      )}
      <h2>Total: ${totalAmount.toFixed(2)}</h2>
    </>
  )
}

export default Cart;
    