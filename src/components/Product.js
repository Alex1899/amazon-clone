import React from 'react';
import '../styles/Product.css';
import { useStateValue } from '../context/StateProvider';

function Product({id, title, image, price, rating}) {
    const [{ basket }, dispatch ] = useStateValue();

    const addBasket = () => {
        dispatch({type: 'ADD_TO_BASKET', product: {
            id,
            title,
            image,
            price,
            rating
        }})
    }

    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className='product__price'>
                    <small>£</small>
                    <strong>{price}</strong>
                </p>

                <div className='product__rating'>
                    {
                        Array(rating).fill().map((_) => (<p>⭐</p>))
                    }

                </div>
            </div>
            <img className='product__image' src={image} />
            <button onClick={addBasket}> Add to basket </button>
        </div>
    )
}

export default Product;
