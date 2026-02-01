import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.link}>Home</Link>
            <Link to="/shop" className={styles.link}>Shop</Link>
            <Link to="/cart" className={styles.link}>Cart</Link>
        </nav>
    )
}

export default Navbar;