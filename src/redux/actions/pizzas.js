import Axios from "axios";


export const fetchPizzas = (sort, category) => (dispatch) => {
    dispatch(setLoaded(false))
    Axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sort}&_order=asc`)
        .then(({ data }) => dispatch(setPizzas(data)))
}

export const setLoaded = payload => ({
    type: 'SET_LOADED',
    payload
})


export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
})