import React, { useState } from 'react';
import '../styles/Product.css';
import { useStateValue } from '../context/StateProvider';
import Button from '@material-ui/core/Button';

function Product({id, title, image, price, rating}) {
    const [{ basket }, dispatch ] = useStateValue();
    let [count, setCount] = useState(0);

    const addBasket = () => {
        setCount(count++);
        dispatch({type: 'ADD_TO_BASKET', product: {
            id,
            title,
            image,
            price,
            rating,
            count
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
                        Array(parseInt(rating)).fill().map((_) => (<p>⭐</p>))
                    }

                </div>
            </div>
            <img className='product__image' src={image} />
           <Button size='small' onClick={addBasket}> Add to basket </Button>
        </div>
    )
}

export default Product;
