import React from 'react';

const SelectBanks = (props) => {

    return (
        <div id="selectBank">
            <div id="bankOne" onClick={props.selectBank}>Bank One</div>
            <div id="bankTwo" onClick={props.selectBank}>Bank Two</div>
        </div>
    )
}

export default SelectBanks;
