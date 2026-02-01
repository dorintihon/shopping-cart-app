import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import Cart from './pages/Cart.jsx';
import PageLayout from './components/PageLayout.jsx';

function App() {
  
  return (
    <>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
