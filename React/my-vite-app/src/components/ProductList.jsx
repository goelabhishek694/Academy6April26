// Build an Interactive Product List where:

// The product array is passed as a prop from the parent component.
// Each product has a name, price, and an “Add to Cart” button.
// Clicking “Add to Cart” logs the product name in the console.


import React from 'react'

function ProductList({products}) {

    const handleAddToCart = (product) => {
        console.log(`${product.name} added to cart`);
    }
    
  return (
    <div style={{maxWidht:"400px", margin:"auto", textAlign:"center"}}>
        <h2>Product List</h2>
        <ul>
        {products.map((product,idx) =>(
            <li key={idx}>
                <h2>Name: {product.name}</h2>
                <p>Price: {product.price}</p>
                <button onClick={()=>handleAddToCart(product)}>Add To Cart</button>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default ProductList
