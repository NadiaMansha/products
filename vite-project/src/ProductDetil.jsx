import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetil = () => {
    const { productId } = useParams()
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
    const product = products.find((product) => product.id === Number(productId))
  return (
    <div>
        <h1>Product Detil</h1>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
        
       
    </div>
  )
}

export default ProductDetil