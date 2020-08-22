import React, { useState, useEffect } from 'react';
import '../../styles/CheckoutProduct.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import { useStateValue } from '../../context/StateProvider';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

 const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
         
          minWidth: 100,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));


function CheckoutProduct({id, title, price, rating, image, count}) {
    const [{basket}, dispatch] = useStateValue();
    const classes = useStyles();
    const [itemCount, setItemCount] = useState(count);

    const removeBasket = () => {
        dispatch({type: 'REMOVE_FROM_BASKET', product: {id, count}})

    }
    
    useEffect(()=>{
      dispatch({type: 'UPDATE_ITEM_COUNT', product: {id, count: itemCount}}) 
    }, [itemCount]);

    const handleChange = (event) => {
        setItemCount(parseInt(event.target.value));
        
      };

   
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
                        Array(parseInt(rating)).fill().map((_) => (<p>⭐</p>))
                    }

                </div>
                <Button size='small' onClick={removeBasket}>Remove from basket</Button> 
                <div className="form_control">
                  <FormControl className={classes.formControl} >
                    <InputLabel htmlFor="itemCount-native-simple">Qty:</InputLabel>
                    <Select
                      native
                      value={itemCount}
                      onChange={handleChange}
                      inputProps={{
                        name: 'itemCount',
                        id: 'itemCount-native-simple',
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      {itemCount > 10 && (<option value={itemCount}>{itemCount}</option>)}
                      
                    </Select>
                  </FormControl>  
                </div>

              
            </div>                       
        </div>
    )
}

export default CheckoutProduct
