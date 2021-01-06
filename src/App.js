import React from "react";
import './App.css';

import { Header } from './components'
import { Home, Cart } from './pages'
import { Route } from 'react-router-dom'

function App() {
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
