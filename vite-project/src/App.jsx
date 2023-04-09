import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './Products'
import { BrowserRouter ,Routes, Route, Link } from 'react-router-dom'
import ProductDetil from './ProductDetil'

function App() {

  return (
    <div className="App">
     <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetil />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
