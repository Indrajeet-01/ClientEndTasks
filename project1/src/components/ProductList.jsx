import React from 'react'
// import './style.css'

const ProductList = ({products}) => {
    
    return (
        <div>

        {products && Object.keys(products).map((category) => (
            <div key={category} className='product-list'>
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Products</h2>
            <ul>
                {products[category].map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>

        ))}
        

        </div>
    )
}

export default ProductList