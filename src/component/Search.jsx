import React from 'react';

function Search({handleInput, search}) {
    return (  
        <section className='searchbox-wrap'>
            <input 
            onChange={handleInput}
            onKeyDown={search}
            type="text"
            placeholder='search for a movie..'
            className='searchbox' />

        </section>
    );
}
export default Search;