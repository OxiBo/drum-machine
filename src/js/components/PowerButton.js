import React from 'react';

const PowerButton = (props) => {
    return (
        <div>

         {!props.power ?
           <button id='power' className="off" onClick={props.handlePowerControl}>
                   OFF
            </button> :
           <button id='power' className="on" onClick={props.handlePowerControl}>
                   ON
           </button>
       }
        </div>
    )
}

export default PowerButton;
