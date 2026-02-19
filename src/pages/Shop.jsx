import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import styles from '../styles/Shop.module.css'

function Shop() {

    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                setLoading(true);
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                // console.log('Fetched products:', data);
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(product => {
            if (selectedCategory === "Electronics") return product.category === "electronics";
            if (selectedCategory === "Jewelery") return product.category === "jewelery";
            if (selectedCategory === "Men's Clothing") return product.category === "men's clothing";
            if (selectedCategory === "Women's Clothing") return product.category === "women's clothing";
        });

  return (
    <>
      <h1 className={styles.title}>Shop</h1>
      {loading ? <p className={styles.loading}>Loading products...</p> : (
        <div>
          <div className={styles.Category}>
            <button onClick={() => setSelectedCategory('All')}>All</button>
            <button onClick={() => setSelectedCategory('Electronics')}>Electronics</button>
            <button onClick={() => setSelectedCategory('Jewelery')}>Jewelery</button>
            <button onClick={() => setSelectedCategory("Men's Clothing")}>Men's Clothing</button>
            <button onClick={() => setSelectedCategory("Women's Clothing")}>Women's Clothing</button>
          </div>
          <h2 className={styles.ProductListTitle}>Products</h2>
          <div className={styles.ProductList}>
            {filteredProducts.length === 0 ? (
                <p>No products found.</p>
            ) : (
                filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Shop;
