import React from 'react'
import '../styles/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from '../context/StateProvider'
import { getBasketTotal } from '../reducer/reducer'

function Subtotal() {
    const [{basket, itemCount}, dispatch ] = useStateValue();
    return (
        <div  className='subtotal'>
            <CurrencyFormat 
                renderText={(value) =>(
                    <>
                        <p>
                            Subtotal ({itemCount} items): <strong>{ value }</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox'/>This order contains a gift
                        </small>
                    </>

                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeperator={true}
                prefix={'£'}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
