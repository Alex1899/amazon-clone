
export const initialState = {
    basket: [],
    itemCount: 0,
    user: null,
}

export const getBasketTotal = (basket) => (
    basket?.reduce((amount, item) => item.price * item.count + amount, 0)
)

const getTotalItemCount = (basket) => (
    basket?.reduce((n, item) => item.count + n, 0)
)

const addProductBasket = (product, state) => {
    console.log('currBasket:', state.basket);
    console.log('product:', product);
    console.log('state: ', state);   
    let flag = false; 
    let newBasket = state.basket.map(item => {
        if(item.id == product.id){
            console.log('item already in the basket =>> just increment count')
            item.count++;
            flag = true;
            return item;
        }
        return item;

    });
    console.log('newBasket: ', newBasket);
    if (flag){
        return {
            ...state, 
            basket: newBasket,
            itemCount: getTotalItemCount(newBasket)
        };
    }
    
    console.log('Reached bottom return, item not in the basket =>> add item to basket');
    newBasket = [...state.basket, product];
    return {
        ...state,
        basket: newBasket,
        itemCount: getTotalItemCount(newBasket)
    }
   
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            // if basket is empty (only executes at the startup)
            if (state.basket.length == 0){
                return {
                    ...state,
                    itemCount: state.itemCount + action.product.count,
                    basket:  [...state.basket, action.product],
                };
            }

            // if basket not empty when adding a product
            return addProductBasket(action.product, state);
           
                                   
        case 'REMOVE_FROM_BASKET':
            // REMOVE
            let newBasket = state.basket.filter((obj) => obj.id !== action.product.id);
        
            return {...state,
                basket: newBasket,
                itemCount: getTotalItemCount(newBasket)
            };
        
        case 'UPDATE_ITEM_COUNT':
            let newBasket2 = state.basket.map(item =>{
                if(item.id == action.product.id){
                    item.count = action.product.count;
                    return item;
                }
                return item;
            })

            console.log('newBasket', newBasket2);
            console.log('itemCount', getTotalItemCount(newBasket2))

            return {
                ...state,
                basket: newBasket2,
                itemCount: getTotalItemCount(newBasket2)
            }

        case 'LOGOUT_USER':
            return {
                ...state,
                basket: [],
                user: null
            };
            
        default:
            return state;

    }
}

export default reducer;