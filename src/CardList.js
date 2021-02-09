import React from 'react';
import Card from './Card';

const CardList = ({ drinks }) => {
    return (
        <div>
            {drinks.map((user, i) => {
                return (
                    <Card
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
