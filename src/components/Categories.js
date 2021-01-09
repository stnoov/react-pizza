import React from 'react';


const Categories = React.memo(({ items, onClick }) => {

    const [activeItem, setActiveItem] = React.useState(null)

    const onSelectItem = (index) => {
        setActiveItem(index)
        onClick(index)
    }

    return (
        <div className="categories">
            <ul >
                <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>All</li>
                {items && items.map((item, index) => {
                    return(
                        <li
                            className={activeItem === index ? 'active' : ''}
                            onClick={() => onSelectItem(index)}
                            key={`${item}_${index}`}>{item}</li>
                    )
                })}
            </ul>
        </div>
    );
}
)

export default Categories;
