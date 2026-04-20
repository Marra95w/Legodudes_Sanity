import '../src/style/lego.css'
import { products } from './assets/legodudes.js'
import { useEffect, useState } from 'react'

import Cart from './components/Cart.jsx'
import Products from './components/Products'
import Header from './components/Header'
import Nav from './components/Nav'
import CategoryTitle from './components/CategoryTitle'
import Layout from './components/Layout.jsx'
import { Routes, Route } from 'react-router-dom'
import CategoryPage from './components/CategoryPage.jsx'

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [cartQuantity, setCartQuantity] = useState(0)
  const [totalSum, setTotalSum] = useState(0)

  console.log("Cart", cart)
  useEffect(()=>{
    const totalQuantity = cart.reduce(
      (sum, item) => sum + item.quantity, 
      0
    );
    setCartQuantity(totalQuantity);
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    setTotalSum(total)
  },[cart]);

  function Page(){
    return(
      <main>
        <CategoryTitle />
        <Products products={products} setCart={setCart} />
      </main>

  )
  }

  return (
    <Layout setIsOpen={setIsOpen} cartQuantity={cartQuantity} isOpen={isOpen} cart={cart} setCart={setCart} totalSum={totalSum}>
    <Routes>
      <Route index element={<Page />} />
      {/* laste komponent i path, lager en ny path */}
      {/* Lurt å ha "kategori" foran slug for å gjøre den unik, bruker slug andre steder */}
      <Route path="/kategori/:slug" element={<CategoryPage />} />
    </Routes>
    </Layout>
  )
  
}

export default App
