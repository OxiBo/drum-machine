import React from 'react';
import DisplayVolume from './DisplayVolume';
import PowerButton from './PowerButton';
import VolumeUp from './VolumeUp';
import VolumeDown from './VolumeDown';
import SelectBanks from './SelectBanks';

const Controls = (props) => {
    // check if power is on to set the back ground of the div display
    const clipScreen = props.power ? 'clipScreenOn' : 'clipScreenOff';

    // use variable to set multiple classes to an element
    const classes = `controlSection ${clipScreen}`;

    return (
        <div>

            <DisplayVolume
             power={props.power}
             volumeLevel={props.volume}
             />

             <div className="controlSection" id="controlButtons">

                 <PowerButton
                 power={props.power}
                 handlePowerControl={props.handlePowerControl}/>


                 <VolumeUp
                 volume={props.volume}
                 handleVolume={props.handleVolume}
                 handleVolumeMouseDown={props.handleVolumeMouseDown}
                 handleVolumeMouseUp={props.handleVolumeMouseUp}

                 />

                 <VolumeDown
                 volume={props.volume}
                 handleVolume={props.handleVolume}
                 handleVolumeMouseDown={props.handleVolumeMouseDown}
                 handleVolumeMouseUp={props.handleVolumeMouseUp}

                 />
             </div>

              <div className={classes} id='display'>

              <p>
                 {props.power ? props.clipName : ""}
              </p>
              </div>

              <div className="controlSection" id="banks">
                <p>Choose bank</p>
                <SelectBanks
                selectBank={props.selectBank}
                />
              </div>
        </div>
    )
}


export default Controls;
