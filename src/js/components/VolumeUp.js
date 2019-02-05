import React from 'react';

const VolumeUp = (props) => {
    // console.log(props)
    return (
        <div>
            <button id='volumeUp' onClick={props.handleVolume} onMouseDown={props.handleVolumeMouseDown} onMouseUp={props.handleVolumeMouseUp}>
            Vol+
            </button>
        </div>
    )
}

export default VolumeUp;
