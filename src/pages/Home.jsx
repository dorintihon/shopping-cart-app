
import { Link } from "react-router-dom";


function Home() {
    return (
        <>
            <main>
                <h1>Welcome to the Shopping Cart</h1>
                <Link to="/shop">Go to Shop</Link>
            </main>
        </>
    )
}

export default Home;
