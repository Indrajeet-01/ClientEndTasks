import React, {useState, useEffect} from 'react'
import './style.css'
import ProductList from './ProductList'

const AddItem = () => {
    const [productId, setProductId] = useState('')
    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState('')
    const [productCategory, setProductCategory] = useState('electronics')
    const [products, setProducts] = useState({
        electronics: [],
        grocery: [],
        cosmetics: []
    })

    useEffect(() => {
        // Load products from local storage on component mount
        const storedProducts = JSON.parse(localStorage.getItem('products'));
        if (storedProducts) {
            setProducts(storedProducts);
        }
    }, []);

    const addProduct = () => {
        if(productId && productName && price && productCategory){
            const newProduct = {
                id: productId,
                name: productName,
                price: price,
                category: productCategory,
            }

            const updatedProducts = {...products}
            updatedProducts[productCategory] = [...updatedProducts[productCategory], newProduct]
            localStorage.setItem('products', JSON.stringify(updatedProducts))
            setProducts(updatedProducts)

            setProductId('');
            setProductName('');
            setPrice('');
            
        }
    }

    return (
        <div>

        
        <div className='form-container'>
            <h2>Add a product</h2>
            <input 
                type="text"
                placeholder='product Id'
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
            />
            <input 
                type="text"
                placeholder='product name'
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
            />
            <input 
                type="number"
                placeholder='price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <select 
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
            >
                <option value="electronics">Electronics</option>
                <option value="grocery">Grocery</option>
                <option value="cosmetics">Cosmetics</option>
            </select>
            <button onClick={addProduct}>Add Product</button>

            
        </div>
        <ProductList products={products}/>
        </div>
    )
}

export default AddItem