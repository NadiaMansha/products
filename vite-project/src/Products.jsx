import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    const products = [
        { id: 1, name: 'Product 1',
          description: 'This is a product',
          price: 1000, },
        { id: 2, name: 'Product 2',
          description: 'This is a product',
          price: 2000, },
        { id: 3, name: 'Product 3',
          description: 'This is a product',
          price: 3000, },
        { id: 4, name: 'Product 4',
          description: 'This is a product',
          price: 4000, },
    ]
  return (
    <div>
        <h1>Products</h1>
        {products.map((product) => (
            <div key={product.id}>
                <h2>
                    <Link to={`/products/${product.id}`}>
                    {product.name}
                    </Link>
                    </h2>
                </div>
        ))}
    </div>
  )
}

export default Products