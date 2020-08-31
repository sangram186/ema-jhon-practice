import React from 'react';

const ReviewItem = (props) => {
    const products = props.product;
    const {name, quantity, key, price} = products;
    const reviewStyle = {
        borderBottom: '1px solid lightGray',
        paddingBottom: '5px',
        marginLeft: '50px'
    }
    return (
        <div style={reviewStyle}>
            <h3>{name}</h3>
            <p>Quantity: {quantity}</p>
            <p>${price}</p>
            <br/>
            <button onClick={() => props.removeProduct(key)} className='main-button'>Remove</button>
        </div>
    );
};

export default ReviewItem;