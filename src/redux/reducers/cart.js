const initialState = {
    items: {},
    totalPrice: 0,
    itemsCount: 0
}


const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_TO_CART': {
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload],
            }

            const allPizzas = [].concat.apply([], Object.values(newItems))
            const price = allPizzas.reduce((sum, obj) => obj.price + sum, 0)
            return {
                ...state,
                items: newItems,
                itemsCount: allPizzas.length,
                totalPrice: price
            }
        }
        default:
            return state;
    }

}

export default cart;