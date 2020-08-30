import React, { useState } from 'react';
import fakeData from '../../fakeData/index';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProduct] = useState(first10);
    
    const [cart, setCart] = useState([]);
    const handleEvent = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        const singleProduct = newCart.filter(pd => pd.key === product.key);
        const count = singleProduct.length;
        addToDatabaseCart(product.key, count)
    }

    return (
        <div>
            <div className="container">
                <div className="shop">
                    {
                        products.map(pd => <Product key={pd.key} showAddToCard={true} handleEvent={handleEvent} product ={pd}></Product>)
                    }
                </div>
                <div className="cart">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;