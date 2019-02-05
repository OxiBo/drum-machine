import React from 'react';

const VolumeDown = (props) => {

    return (
        <div>
            <button id='volumeDown' onClick={props.handleVolume} onMouseDown={props.handleVolumeMouseDown} onMouseUp={props.handleVolumeMouseUp}>
            Vol-
            </button>
        </div>
        )
}

export default VolumeDown;
