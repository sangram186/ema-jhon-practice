import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const product = props.product;
    const {img, name, seller, stock, price, key} = product;
    return (
        <div className='single-product'>
            <div className='image'><img src={img} alt=""/></div>
            <div className='content'>
                <h4><Link to={'/product/' + key}>{name}</Link></h4>
                <p>by: {seller}</p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                { props.showAddToCard && 
                    <button className='main-button' onClick={() => props.handleEvent(product)}><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
                }
            </div>
        </div>
    );
};

export default Product;