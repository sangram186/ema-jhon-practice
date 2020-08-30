import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price, 0)
    const shipping = (total * .20).toFixed(2);
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Product price: {cart.length}</p>
            <p><small>Items: ${total}</small></p>
            <p><small>Shipping & Handing: ${shipping}</small></p>
            <p>Total Price: {parseFloat(total + shipping).toFixed(2)}</p>
            <br />
            <Link to='/review'>
                <button className='main-button'>Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;