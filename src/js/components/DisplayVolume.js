import React from 'react';

const DisplayVolume = (props) => {

    // set class isActive to use css transition to fade in the volume level
    const isActive = props.power ? 'isActive' : '';

    return (
        <div className="controlSection" id='volumeDisplay'>
         <p className={isActive}>{props.power ? `VOL : ${props.volumeLevel} %` : ''} </p>
        </div>
        )
}

export default DisplayVolume;
