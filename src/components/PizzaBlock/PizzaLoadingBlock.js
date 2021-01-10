import React from 'react';
import ContentLoader from "react-content-loader";

const PizzaLoadingBlock = () => {
    return (
        <ContentLoader
            className='pizza-block'
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="133" cy="152" r="130" />
            <circle cx="170" cy="127" r="21" />
            <rect x="0" y="294" rx="3" ry="3" width="280" height="26" />
            <rect x="1" y="333" rx="6" ry="6" width="280" height="84" />
            <rect x="7" y="426" rx="0" ry="0" width="68" height="30" />
            <rect x="122" y="421" rx="25" ry="25" width="152" height="40" />
        </ContentLoader>

    )
};

export default PizzaLoadingBlock;
