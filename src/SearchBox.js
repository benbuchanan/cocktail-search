import React from 'react';

function SearchBox({searchChange, placeholder}) {
    return (
        <div className='pa2'>
            <input className='tc pa3 ba b--green bg-washed-yellow' type='search' onChange={searchChange} placeholder={placeholder}/>
        </div>
    );
}

export default SearchBox;