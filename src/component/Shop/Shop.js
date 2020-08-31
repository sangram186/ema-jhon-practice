import React, { useState } from 'react';
import fakeData from '../../fakeData/index';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProduct] = useState(first10);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCard = getDatabaseCart();
        const productKey = Object.keys(savedCard);
        const previousKey = productKey.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = savedCard[existingKey];
            // console.log(existingKey, savedCard[existingKey])
            return product;
        })
        setCart(previousKey)
    }, [])


    // console.log(cart);
    const handleEvent = (product) => {
        const toBeAddedKey = product.key;
        const singleProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if (singleProduct) {
            count = singleProduct.quantity + 1;
            singleProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, singleProduct]
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count)
    }

    return (
        <div>
            <div className="twin-container">
                <div className="product-container">
                    {
                        products.map(pd => <Product key={pd.key} showAddToCard={true} handleEvent={handleEvent} product={pd}></Product>)
                    }
                </div>
                <div className="cart">
                    <Cart cart={cart}>
                        <Link to='/review'>
                            <button className='main-button'>Review Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;