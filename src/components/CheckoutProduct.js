import React from 'react'
import '../styles/CheckoutProduct.css'
import { useStateValue } from '../context/StateProvider'


function CheckoutProduct({id, title, price, rating, image}) {
    const [{basket}, dispatch] = useStateValue();

    const removeBasket = () => {
        dispatch({type: 'REMOVE_FROM_BASKET', id})

    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt='' />   
            <div className="checkoutProduct__info">
                <p><strong>{title}</strong></p>
                <p className='checkoutProduct__price'>
                    <small>£</small>
                    <strong>{price}</strong>
                </p>

                <div className='checkoutProduct__rating'>
                    {
                        Array(rating).fill().map((_) => (<p>⭐</p>))
                    }

                </div>
                <button onClick={removeBasket}>Remove from basket</button>   
            </div> 
                 
        </div>
    )
}

export default CheckoutProduct
