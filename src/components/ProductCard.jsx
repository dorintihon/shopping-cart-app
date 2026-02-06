import styles from '../styles/ProductCard.module.css';
import { useCart } from '../context/CartContext';


function ProductCard({ product = {
  name: "Placeholder Product",
  price: "0.00",
  image: null,
  description: "This is a placeholder product description.",
} }) {
    const { addToCart } = useCart();
  return (
    <div className={styles.productCard}>
        <img src={product.image} alt={product.name} className={styles.productImage} />
      <h2 className={styles.productName}>{product.name}</h2>
      <p className={styles.productPrice}>${product.price}</p>
      <div className={styles.productDescription}>{product.description}</div>
      <button className={styles.addToCartButton} onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;