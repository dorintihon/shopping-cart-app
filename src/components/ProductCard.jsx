import styles from '../styles/ProductCard.module.css';
import { useCart } from '../context/CartContext';
import { useState } from 'react';


function ProductCard({ product = {
  name: "Placeholder Product",
  price: "0.00",
  image: null,
  description: "This is a placeholder product description.",
} }) {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
  return (
    <div className={styles.productCard}>
        <img src={product.image} alt={product.name} className={styles.productImage} />
      <h2 className={styles.productName}>{product.name}</h2>
      <p className={styles.productPrice}>${product.price}</p>
    
      <div className={styles.productActions}>
        <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className={styles.quantityInput} />
        <button className={styles.addDecreaseButton} onClick={() => setQuantity(quantity + 1)}>+</button>
        <button className={styles.addDecreaseButton} onClick={() => {if (quantity > 1) setQuantity(quantity - 1)}}>-</button>
        <button className={styles.addToCartButton} onClick={() => addToCart(product, quantity)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;