import React from 'react';
import GifCard from './GitCard';

const GifList = ({ gifs }) => {
    const elements = gifs.map(gif => {
        return (
            <GifCard key={gif.id} gif={gif}></GifCard>
        );
    });

    return (
        <div>
            {elements}
        </div>
    );
}

export default GifList;