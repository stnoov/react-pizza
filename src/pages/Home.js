import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Categories, SortPopup, PizzaBlock, PizzaLoadingBlock} from "../components";

import {setCategory, setSort} from '../redux/actions/filters'
import {fetchPizzas} from "../redux/actions/pizzas";

const categoryNames = ['Meat', 'Vegetarian', 'Grill', 'Spicy', 'Calzone'];
const sortItems = [
    {name:'popularity', type: 'popularity'},
    {name: 'price', type: 'price'},
    {name: 'alphabetically', type: 'name'}
];

const Home = () => {
    const dispatch = useDispatch();
    const items = useSelector(({ pizzas }) => pizzas.items)
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
    const { category, sort} = useSelector(({ filters }) => filters)

    React.useEffect(() => {
        dispatch(fetchPizzas(sort, category))
    }, [category, sort]);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSortType = React.useCallback((type) => {
        console.log(type)
        dispatch(setSort(type))
    }, [])

    return (
        <div>
            <div className="container">
                <div className="content__top">
                    <Categories
                        activeCategory={category}
                        onClickCategory={onSelectCategory}
                        items={categoryNames}/>
                    <SortPopup activeSortType={sort} items={sortItems} onClickSortType={onSelectSortType} />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isLoaded ?
                    items.map((elem) => {
                        return(
                            <PizzaBlock
                                key={elem.id}
                                {...elem}
                            />
                        )
                    }
                    )
                    : Array(12)
                            .fill(0)
                            .map((_, index) => (<PizzaLoadingBlock key={index}/>))}
                </div>
            </div>
        </div>
    );
};

export default Home;
