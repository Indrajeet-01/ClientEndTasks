import React, {useEffect} from 'react';
import { useCart, useDispatchCart } from '../../reducers/ContextReducer';
import './cart.css'; 
import axios from 'axios';


const Cart = () => {
    const cartItems = useCart();
    const dispatch = useDispatchCart();

    const handleRemove = (index) => {
        dispatch({ type: 'REMOVE_FROM_CART', index });
    };

    const totalAmount = cartItems.reduce((total, item) => {
        return total + parseFloat(item.price);
    }, 0).toFixed(2);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get('https://crudcrud.com/api/e5bc3c591bd94fb2b680a477f3a6bde8/cart');
                if (response.status === 200) {
                    // Dispatch the stored cart items to the context
                    dispatch({
                        type: 'SET_CART',
                        cart: response.data,
                    });
                }
            } catch (error) {
                console.error('Error fetching cart items', error);
            }
        };

        fetchCartItems();
    }, [dispatch]);

    return (
        <div className="cart-container">
            {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
            ) : (
                <>
                <table className="cart-table">
                    <thead className="cart-table-header">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Amount</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody className="cart-table-body">
                    {cartItems.map((item, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.qty}</td>
                            <td>₹{item.price}</td>
                            <td>
                                <button className="remove-button" onClick={() => handleRemove(index)}>
                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
        </table>

                <p className="cart-total">Total Price: ${totalAmount}/-</p>
                <button className="checkout-button">Check Out</button>
        
            </>
        )}

        </div>
    );
};

export default Cart;
