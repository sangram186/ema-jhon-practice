import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const saveData = getDatabaseCart();
        const productKeys = Object.keys(saveData);
        const reviewProduct = productKeys.map(key => {
            const product = fakeData.find(data => data.key === key);
            product.quantity = saveData[key];
            return product;
        });
        setCart(reviewProduct);
    },[])
    return (
        <div>
            <h1>This is review {cart.length}</h1>
            {
                cart.map(pd => <ReviewItem key={pd.key} product={pd}></ReviewItem>)
            }
        </div>
    );
};

export default Review;