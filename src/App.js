import React from "react";
import Axios from 'axios'
import { Route } from 'react-router-dom'
import { useDispatch } from "react-redux";

import { Header } from './components'
import { Home, Cart } from './pages'
import { setPizzas } from './redux/actions/pizzas'


function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        Axios.get('http://localhost:3001/pizzas')
            .then(({ data }) =>
                dispatch(setPizzas(data)))
    }, []);

    return (
        <div>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route path='/' component={Home} exact />
                    <Route path='/cart' component={Cart} exact />
                </div>
            </div>
        </div>
    )
}

export default App;
