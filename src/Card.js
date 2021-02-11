import React from 'react';
import './Card.css';

function Card({ name, imgSrc, cardclick }) {
    return (
        <div
            className='flipper tc bg-washed-yellow br3 ma3 pa3 pointer'
            onClick={cardclick}
        >
            <h2 className='drink-name'>{name}</h2>
            <img className='image br3' alt={name} src={imgSrc} />
        </div>
    );
}

export default Card;
