const initialState = {
    category: null,
    sort: 'popularity'
}


const filters = (state = initialState, action) => {
    if (action.type === 'SET_SORT') {
        return {
            ...state,
            sort: action.payload
        }
    }
    if (action.type === 'SET_CATEGORY') {
        return {
            ...state,
            category: action.payload
        }
    }
    return state
}

export default filters;