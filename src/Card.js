import React from 'react';
import './Card.css';

function Card({ name, imgSrc, cardclick }) {
    return (
        <div
            className='flipper tc bg-washed-yellow br3 ma3 pa4 pointer'
            onClick={cardclick}
        >
            <img className='image br3' alt={name} src={imgSrc} />
            <h2 className='drink-name'>{name}</h2>
        </div>
    );
}

export default Card;
