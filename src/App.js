import React from "react";
import './App.css';

import { Header } from './components'
import { Home, Cart } from './pages'
import { Route } from 'react-router-dom'

function App() {

    const [pizzas, setPizzas] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3000/db.json')
            .then((response) => response.json())
            .then((json) => setPizzas(json.pizzas))
    });

    return (
        <div>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route path='/' render={() =>  <Home items={pizzas}/>} exact />
                    <Route path='/cart' component={Cart} exact />
                </div>
            </div>
        </div>
    )
}

export default App;
