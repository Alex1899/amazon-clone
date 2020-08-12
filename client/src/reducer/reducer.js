
export const initialState = {
    basket: [],
    user: null,
}

export const getBasketTotal = (basket) => (
    basket?.reduce((amount, item) => item.price + amount, 0)
)

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            // ADD 
            return {
                ...state,
                basket:  [...state.basket, action.product],
            };
        case 'REMOVE_FROM_BASKET':
            // REMOVE
            let newBasket = [...state.basket];
            let arr = newBasket.filter((obj) => obj.id !== action.id);
            console.log(arr);
            return {...state,
                basket: arr,
            };
        default:
            return state;

    }
}

export default reducer;