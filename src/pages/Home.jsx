
import { Link } from "react-router-dom";
import styles from '../styles/Home.module.css'


function Home() {
    return (
        <>
            <main className={styles.main}>
                <h1 className={styles.title}>Welcome to the Shopping Cart</h1>
                <Link to="/shop" className={styles.button}>Go to Shop</Link>
            </main>
        </>
    )
}

export default Home;
