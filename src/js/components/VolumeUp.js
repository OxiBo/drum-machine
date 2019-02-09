import React from 'react';

const VolumeUp = (props) => {
    // console.log(props)
    return (
        <div>
            <button id='volumeUp' onMouseDown={props.handleVolumeMouseDown} onMouseUp={props.handleVolumeMouseUp}>
            Vol+
            </button>
        </div>
    )
}

export default VolumeUp;
