
export const initialState = {
    basket: [{
        id:'123456',
        title:'Very sick dumbell! Trust!!',
        price: 150,
        rating: 5,
        image: 'https://sportecentral.com/wp-content/uploads/2020/06/5845062_sa.jpg'
            
    }],
    user: null,
}

export const getBasketTotal = (basket) => (
    basket?.reduce((amount, item) => item.price + amount, 0)
)

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            // ADD 
            return {
                ...state,
                basket:  [...state.basket, action.product],
            };
        case 'REMOVE_FROM_BASKET':
            // REMOVE
            let newBasket = [...state.basket];
            console.log(action.id);
            console.log(newBasket);
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