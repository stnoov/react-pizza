import React from "react";
import Axios from 'axios'

import { Header } from './components'
import { Home, Cart } from './pages'
import { Route } from 'react-router-dom'

function App() {

    const [pizzas, setPizzas] = React.useState([]);

    React.useEffect(() => {
        Axios.get('http://localhost:3000/db.json')
            .then(({ data }) => setPizzas(data.pizzas))
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
