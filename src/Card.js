import React from 'react';
import './Card.css';

function Card( { name, alcoholic, imgSrc } ) {
    return (
        <div className='tc bg-washed-yellow dib br3 ma3 pa4'>
            <img className='image br3' alt={name} src={imgSrc} />
            <h2 className='dark-blue'>{name}</h2>
            <p>{alcoholic}</p>
        </div>
    );
}

export default Card;
