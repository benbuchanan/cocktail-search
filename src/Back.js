import React from 'react';

function Back({ name, cardclick, ingredients, measures, instructions }) {
    const usedMeasures = measures.filter((mes) => {
        if (mes == null) {
            return false; // skip
        }
        return true;
    });

    const usedIngredients = ingredients
        .filter(function (ing) {
            if (ing == null) {
                return false; // skip
            }
            return true;
        })
        .map((ingredient, index) => {
            return (
                <li key={index}>
                    <strong>{usedMeasures[index]}</strong> {ingredient}
                </li>
            );
        });

    return (
        <div
            className='flipper bg-washed-yellow br3 ma3 pa4 pointer'
            onClick={cardclick}
        >
            <h2 className='drink-name tc'>{name}</h2>
            <ul className='tl'>{usedIngredients}</ul>
            <p className='tl'>{instructions}</p>
        </div>
    );
}

export default Back;
