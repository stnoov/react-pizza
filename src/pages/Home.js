import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Categories, SortPopup, PizzaBlock} from "../components";

import {setCategory} from '../redux/actions/filters'

const categoryNames = ['Meat', 'Vegetarian', 'Grill', 'Spicy', 'Calzone'];
const sortItems = [
    {name:'popularity', type: 'popularity'},
    {name: 'price', type: 'price'},
    {name: 'alphabetically', type: 'alphabetically'}
];

const Home = () => {
    const dispatch = useDispatch();
    const items = useSelector(({ pizzas }) => pizzas.items)

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    return (
        <div>
            <div className="container">
                <div className="content__top">
                    <Categories
                        onClick={onSelectCategory}
                        items={categoryNames}/>
                    <SortPopup items={sortItems}/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {items &&
                    items.map((elem) => {
                        return(
                            <PizzaBlock
                                key={elem.id}
                                {...elem}
                            />
                        )
                    }
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
