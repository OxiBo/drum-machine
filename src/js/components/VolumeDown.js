import React from 'react';

const VolumeDown = (props) => {

    return (
        <div>
            <button id='volumeDown' onMouseDown={props.handleVolumeMouseDown} onMouseUp={props.handleVolumeMouseUp}>
            Vol-
            </button>
        </div>
        )
}

export default VolumeDown;
