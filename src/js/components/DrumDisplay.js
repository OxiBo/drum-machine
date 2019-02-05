import React from 'react';
import DrumPad from './DrumPad';

const DrumDisplay = (props) => {

        const pads = props.padElement.map(sound => {

            return (
                <DrumPad
                    key={sound.keys}
                    keyCode={sound.keyCode}
                    id={sound.keys}
                    src={sound.src}
                    name={sound.name}
                    handleClick={props.handleClick}
                />
            )
        });


        return (
            <div>
                <div id="clipName">
                        {pads}
                </div>
            </div>
        )
    }


export default DrumDisplay;
