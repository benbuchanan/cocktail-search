import React from 'react';
import CardFront from './CardFront';

const CardList = ({ drinks }) => {
    return (
        <div>
            {drinks.map((user, i) => {
                return (
                    <CardFront
                        key={i}
                        name={drinks[i].strDrink}
                        alcoholic={drinks[i].strAlcoholic}
                        imgSrc={drinks[i].strDrinkThumb}
                    />
                );
            })}
        </div>
    );
};

export default CardList;
