import React from 'react';
const path = require('path');


const DrumPad = (props) => {

    return (
        <div className='drum-pad'  id=
          {props.name} onClick={props.handleClick}>

          <audio className='clip' id={props.id} src={`${props.src}`} data-key={props.name}></audio>
           <p> {props.id}</p>

        </div>
    )
}

export default DrumPad;


// return (
//         <div className='drum-pad' onClick={props.handleClick}>

//           <audio className='clip' id={props.id} src={`sounds/${props.src}`} data-key={props.name}></audio>
//            <p> {props.id}</p>

//         </div>
//     )
