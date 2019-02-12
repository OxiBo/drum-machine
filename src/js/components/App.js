import React from 'react';
import DrumDisplay from './DrumDisplay';
import Controls from './Controls';
import { removeClass } from './../helpersFunc/helpers'

const activeBank = document.querySelector('.activeBank');
const bankOne = [{
        keys: 'Q',
        keyCode: 113,
        name: 'Heater-1',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
        keys: 'W',
        keyCode: 119,
        name: 'Heater-2',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
        keys: 'E',
        keyCode: 101,
        name: 'Heater-3',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
        keys: 'A',
        keyCode: 97,
        name: 'Heater-4',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
        keys: 'S',
        keyCode: 115,
        name: 'Clap',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
        keys: 'D',
        keyCode: 100,
        name: 'Open-HH',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
        keys: 'Z',
        keyCode: 122,
        name: 'Kick-n\'-Hat',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
        keys: 'X',
        keyCode: 120,
        name: 'Kick',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
        keys: 'C',
        keyCode: 99,
        name: 'Closed-HH',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
];


const bankTwo = [{
    keys: 'Q',
    keyCode: 81,
    name: 'Chord-1',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
    keys: 'W',
    keyCode: 87,
    name: 'Chord-2',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
    keys: 'E',
    keyCode: 69,
    name: 'Chord-3',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
    keys: 'A',
    keyCode: 65,
    name: 'Shaker',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
    keys: 'S',
    keyCode: 83,
    name: 'Open-HH',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
    keys: 'D',
    keyCode: 68,
    name: 'Closed-HH',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
    keys: 'Z',
    keyCode: 90,
    name: 'Punchy-Kick',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
    keys: 'X',
    keyCode: 88,
    name: 'Side-Stick',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
    keys: 'C',
    keyCode: 67,
    name: 'Snare',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];

// i did not use this bank
const bankThree = [{
        keys: 'Q',
        keyCode: 113,
        name: 'CLHH',
        src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20CLHH.wav?1532352722339'
    },
    {
        keys: 'W',
        keyCode: 119,
        name: 'SNR D1',
        src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20SNR%20D1.wav?1532352722730'
    },
    {
        keys: 'E',
        keyCode: 101,
        name: 'RIM SHT',
        src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20RIM%20SHT.wav?1532352722795'
    },
    {
        keys: 'A',
        keyCode: 97,
        name: 'SNR D2',
        src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20SNR%20D2.wav?1532352722873'
    },
    {
        keys: 'S',
        keyCode: 115,
        name: 'RIDE',
        src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20RIDE.wav?1532352722922'
    },
    {
        keys: 'D',
        keyCode: 100,
        name: 'TOM1',
        src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20TOM1.wav?1532352723451'
    },
    {
        keys: 'Z',
        keyCode: 122,
        name: 'TOM2',
        src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20TOM2.wav?1532352723760',
    },
    {
        keys: 'X',
        keyCode: 120,
        name: 'COWBELL',
        src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20COWBELL.wav?1532352724065'
    },
    {
        keys: 'C',
        keyCode: 99,
        name: 'OPHH',
        src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20OPHH.wav?1532352724689'
    }
];


export default class App extends React.Component {
    state = {
        power: false,
        clipName: '',
        volume: 50,
        timerVolumeChange: null,
        sounds: bankOne,
        activeBank: null
    }

    // used this method to be able to use keyPress even on the drum pads
    componentDidMount() {
        this.handleKeyPress();
    }

    // moved to helpersFunc folder
    // helper function to remove class from drum-pads
    // removeClass = () => {
    //     const drumPadElements = document.querySelectorAll(".drum-pad");
    //     drumPadElements.forEach(pad => pad.addEventListener('transitionend', function(e) {

    //         if (e.propertyName !== "transform") return; // skip if it is not transform
    //         this.classList.remove('playingPad')
    //     }))
    // }


    handleKeyPress = () => {
        // work around to bind THIS to be able to use it to change the state onLeyPress in the event listener
        const thisComponent = this;

        window.addEventListener('keypress', function(e) {
            const keyName = e.key.toUpperCase();
            const pressed = document.getElementById(keyName);

            if (pressed && thisComponent.state.power) {
                pressed.volume = thisComponent.state.volume / 100;

                // select pads which have class activePad to remove it before adding the class to the pad which was pressed
                const activePad = document.querySelector('.activePad');
                if (activePad) {
                    activePad.classList.remove('activePad');
                }

                // select audio tag to play
                const pad = document.getElementById(keyName).parentElement;
                pad.classList.add('activePad');
                pressed.currentTime = 0; // rewind to the start
                pressed.play();
                thisComponent.setState({ clipName: pressed.dataset.key });

                // scale a drum pad and add color  when playing and remove it
                pressed.parentElement.classList.add('playingPad');
                // thisComponent.removeClass();
                removeClass(document.querySelectorAll(".drum-pad"), "transform", 'playingPad');
            };
        })
    }

    handleClick = (e) => {
        // select the div element which was clicked
        const elt = e.target.closest(".drum-pad").children[0];

        //play the sound only if the power button is on
        if (this.state.power) {
            elt.volume = this.state.volume / 100;
            elt.currentTime = 0; // rewind to the start
            elt.play();
            this.setState({
                clipName: elt.dataset.key
            });

            // scale a drum pad and add color  when playing and remove it
            e.target.closest(".drum-pad").classList.add('playingPad');
            // this.removeClass();
            removeClass(document.querySelectorAll(".drum-pad"), "transform", 'playingPad');
        }
    }


    handlePowerControl = (e) => {
        this.setState({
            power: !this.state.power,
            volume: 50,
            activeBank: 'bankOne'
        });

        if (e.target.className === 'off') {
            this.setState({ clipName: 'WELCOME' })
        }
        if (this.state.power) {
            const activePad = document.querySelector('.activePad');
            if (activePad) {
                activePad.classList.remove('activePad');
            }

            const activeBank = document.querySelector('.activeBank');
            if (activeBank) {
                activeBank.classList.remove('activeBank');
            }
        } else {
            document.getElementById('bankOne').classList.add('activeBank');

        }
    }

    // handleVolume = (e) => {
    //     const buttonType = e.target.id;

    //     if (this.state.power) {
    //         if (buttonType === 'volumeUp' && this.state.volume < 100) {
    //             this.setState(prevState => ({
    //                 volume: prevState.volume + 1
    //             }));

    //         } else if (buttonType === 'volumeDown' && (this.state.volume > 0 && this.state.volume <= 100)) {
    //             this.setState(prevState => ({
    //                 volume: prevState.volume - 1
    //             }))
    //         }
    //     }
    // }

    // function that makes it possible to change sound with mouseDown
    handleVolumeMouseDown = (e) => {
        const buttonType = e.target.id;
        if (this.state.power) {
            if (buttonType === 'volumeUp' && this.state.volume < 100) {
                this.setState(() => ({
                    timerVolumeChange: setInterval(() => {
                        if (this.state.volume < 100) {
                            this.setState(prevState => ({
                                volume: prevState.volume + 1
                            }))
                        }
                    }, 150)
                }))
            } else if (buttonType === 'volumeDown' && this.state.volume <= 100) {
                this.setState(() => ({
                    timerVolumeChange: setInterval(() => {
                        if (this.state.volume > 0) {
                            this.setState(prevState => ({
                                volume: prevState.volume - 1
                            }))
                        }
                    }, 150)
                }))
            }
        }
    }

    // clear interval on mouseUp (setting timerVolumeChange to null)
    handleVolumeMouseUp = () => {
        if (this.state.power) {
            if (this.state.timerVolumeChange) {
                clearInterval(this.state.timerVolumeChange);
                this.setState(() => ({
                    timerVolumeChange: null
                }));
            }
        }
    }

    selectBank = (e) => {
        const divClicked = e.target.id;

        // helper function for adding active class
        const addActiveClass = () => {
            const activeBank = document.querySelector('.activeBank')
            if (activeBank) {
                activeBank.classList.remove('activeBank');
            }
            document.getElementById(divClicked).classList.add('activeBank');
        }

        if (this.state.power) {
            if (divClicked === "bankTwo") {
                this.setState(() => ({
                    sounds: bankTwo,
                    activeBank: 'bankTwo'
                }));
                addActiveClass();
            } else if (divClicked === "bankOne") {
                this.setState(() => ({
                    sounds: bankOne,
                    activeBank: 'bankOne'
                }));
                addActiveClass();
            }
        }
    }

    render() {
        return (
            <div>
               <header>
                    <h1>Drum Machine</h1>
               </header>
               <div className='container'>

                   <div id="drum-machine" onKeyPress={this.handleKeyPress}>
                      <DrumDisplay
                         padElement={this.state.sounds}
                         handleClick={this.handleClick}
                       />
                   </div>

                   <div id="controls">
                        <Controls
                        clipName={this.state.clipName}
                        power={this.state.power}
                        handlePowerControl={this.handlePowerControl}
                        volume={this.state.volume}
                        // handleVolume={this.handleVolume}
                        handleVolumeMouseDown={this.handleVolumeMouseDown}
                        handleVolumeMouseUp={this.handleVolumeMouseUp}
                        selectBank={this.selectBank}
                        />
                   </div>
               </div>
            </div>
        )
    }
}
