const initialState = {
    category: 0,
    sort: 'popularity'
}


const filters = (state = initialState, action) => {
    if (action.type === 'SET_SORT') {
        return {
            ...state,
            sort: action.payload
        }
    }
    return state
}

export default filters;