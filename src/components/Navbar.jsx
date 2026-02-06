import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css'
import { useCart } from '../context/CartContext';

function Navbar() {
    const { getTotalItems } = useCart();

    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.link}>Home</Link>
            <Link to="/shop" className={styles.link}>Shop</Link>
            <Link to="/cart" className={styles.link}>Cart ({getTotalItems()})</Link>
        </nav>
    )
}

export default Navbar;