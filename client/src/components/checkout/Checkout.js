import React from 'react';
import { useStateValue } from '../../context/StateProvider';
import '../../styles/Checkout.css';
import CheckoutProduct from './CheckoutProduct'
import Subtotal from '../Subtotal';


function Checkout() {
    const [{ basket }, dispatch] = useStateValue();


    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout__ad' 
                    src='https://www.macarta.com/wp/wp-content/uploads/2020/02/amazonadvertisinglogo.png'
                    alt='checkout page ad'
                />
               
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty.</h2>
                        <p>You have no items in your basket. To buy one click "Add to basket" butten next to the item.</p>
                    </div>
                ) : (
                    <div>
                        <h2 className='checkout__title' >You Shopping Basket</h2>
                        {console.log('Basket: ',basket)}
                        {basket?.map((item) => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                count={item.count}
                            />
                        ))}
                    </div>
                )}
            </div>
            {basket.length > 0 ? (
               <Subtotal />
            ): <h1></h1>}
           
        </div>
    )
}

export default Checkout
