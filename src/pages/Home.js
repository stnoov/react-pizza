import React from 'react';
import {Categories, SortPopup, PizzaBlock} from "../components";
import {useSelector} from "react-redux";

const Home = () => {

    const { items } = useSelector(({ pizzas }) => {
        return {
            items: pizzas.items
        }
    })

    return (
        <div>
            <div className="container">
                <div className="content__top">
                    <Categories
                        onClick={(name) => console.log(name)}
                        items={[
                            'Мясные',
                            'Вегетарианская',
                            'Гриль',
                            'Острые',
                            'Закрытые'
                        ]}/>
                    <SortPopup items={[
                        {name:'popularity', type: 'popularity'},
                        {name: 'price', type: 'price'},
                        {name: 'alphabetically', type: 'alphabetically'}
                    ]}/>
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
