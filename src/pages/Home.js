import React from 'react';
import {Categories, SortPopup, PizzaBlock} from "../components";

const Home = ({items}) => {
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
                        'popularity',
                        'price',
                        'alphabetically'
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
