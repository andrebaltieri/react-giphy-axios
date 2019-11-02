import React from 'react';

const GifCard = ({ gif }) => {
    const style = {
        float: 'left',
        margin: '10px',
        background: `url(${gif.images.downsized.url}) 50% 50% no-repeat`,
        width: '140px',
        height: '140px',
        cursor: 'pointer'
    };

    const copyToClipboard = str => {
        const el = document.createElement('textarea');
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };

    return (
        <div style={style} onClick={() => copyToClipboard(gif.url)}></div>
    );
}

export default GifCard;