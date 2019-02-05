import React from 'react';
import DrumDisplay from './DrumDisplay';
import Controls from './Controls';

export default class App extends React.Component {
    state = {
        power: false,
        clipName: '',
        volume: 0.5,
        timerVolumeChange: null,
        sounds: [{
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
        ]
        // sounds: [{
        //         keys: 'Q',
        //         keyCode: 113,
        //         name: 'boom',
        //         src: 'boom.wav'
        //     },
        //     {
        //         keys: 'W',
        //         keyCode: 119,
        //         name: 'clap',
        //         src: 'clap.wav'
        //     },
        //     {
        //         keys: 'E',
        //         keyCode: 101,
        //         name: 'hihat',
        //         src: 'hihat.wav'
        //     },
        //     {
        //         keys: 'A',
        //         keyCode: 97,
        //         name: 'kick',
        //         src: 'kick.wav'
        //     },
        //     {
        //         keys: 'S',
        //         keyCode: 115,
        //         name: 'openhat',
        //         src: 'openhat.wav'
        //     },
        //     {
        //         keys: 'D',
        //         keyCode: 100,
        //         name: 'ride',
        //         src: 'ride.wav'
        //     },
        //     {
        //         keys: 'Z',
        //         keyCode: 122,
        //         name: 'snare',
        //         src: 'snare.wav'
        //     },
        //     {
        //         keys: 'X',
        //         keyCode: 120,
        //         name: 'tink',
        //         src: 'tink.wav'
        //     },
        //     {
        //         keys: 'C',
        //         keyCode: 99,
        //         name: 'tom',
        //         src: 'tom.wav'
        //     }
        // ]
    }

    // used this method to be able to use keyPress even on the drum pads
    componentDidMount() {
        this.handleKeyPress();

        this.volumeStop();
        // if (this.state.volume === 1 || this.state.volume === 0) {
        //     console.log('???')
        //     clearInterval(this.state.timerVolumeChange);
        //     this.setState(prevState => ({
        //         timerVolumeChange: null
        //     }));
        // }
    }

    handleKeyPress = () => {
        // work around to bind THIS to be able to use it to change the state onLeyPress in the event listener
        const clip = this;

        window.addEventListener('keypress', function(e) {
            const keyName = e.key.toUpperCase();
            const pressed = document.getElementById(keyName);

            if (pressed && clip.state.power) {
                pressed.volume = clip.state.volume;

                // select pads which have class activePad to remove it before adding the class to the pad which was pressed
                const activePad = document.querySelector('.activePad');
                if (activePad) {
                    activePad.classList.remove('activePad');
                }

                // select audio tag to play
                const pad = document.getElementById(keyName).parentElement;
                pad.classList.add('activePad');
                pressed.currentTime = 0; // ?????
                pressed.play();
                clip.setState({ clipName: pressed.dataset.key });
            }
        })
    }

    handleClick = (e) => {
        // select the div element which was clicked
        const elt = e.target.closest(".drum-pad").children[0];

        //play the sound only if the power button is on
        if (this.state.power) {
            elt.volume = this.state.volume;
            elt.play();
            this.setState({
                clipName: elt.dataset.key
            });
        }
    }


    handlePowerControl = (e) => {
        this.setState({
            power: !this.state.power,
            volume: 0.5
        });
        if (e.target.className === 'off') {
            this.setState({ clipName: 'WELCOME' })
        }
        if (this.state.power) {
            const activePad = document.querySelector('.activePad');
            if (activePad) {
                activePad.classList.remove('activePad');
            }
        }
    }

    handleVolume = (e) => {
        const buttonType = e.target.id;

        if (this.state.power) {
            if (buttonType === 'volumeUp' && (this.state.volume < 1)) {
                this.setState(prevState => ({
                    volume: prevState.volume + 0.05
                }));

                if (this.state.volume > 0.95) {
                    this.setState(() => ({
                        volume: 1
                    }))
                }
            } else if (buttonType === 'volumeDown' && (this.state.volume >= 0.01 && this.state.volume < 1.05)) {
                this.setState(prevState => ({
                    volume: prevState.volume - 0.05
                }))

                 if (this.state.volume < 0.01) {
                    this.setState(() => ({
                        volume: 0
                    }))
                }
            }
        }
    }

    handleVolumeMouseDown = (e) => {
        const buttonType = e.target.id;
        if (this.state.power) {
            if (buttonType === 'volumeUp' && (this.state.volume < 1)) {
                this.setState(() => ({
                    timerVolumeChange: setInterval(() => {
                        if (this.state.volume < 1) {
                            this.setState(prevState => ({
                                volume: prevState.volume + 0.01
                            }))
                        }
                    }, 200)
                }))
            } else if (buttonType === 'volumeDown' && (this.state.volume >= 0.01 && this.state.volume < 1.01)) {
                this.setState(() => ({
                    timerVolumeChange: setInterval(() => {
                        if (this.state.volume > 0.01) {
                            this.setState(prevState => ({
                                volume: prevState.volume - 0.01
                            }))
                        }
                    }, 200)
                }))
            }
        }
    }


    handleVolumeMouseUp = (e) => {
        if (this.state.power) {
            if (this.state.timerVolumeChange) {
                clearInterval(this.state.timerVolumeChange);
                this.setState(() => ({
                    timerVolumeChange: null
                }));
            }
        }
    }

    volumeStop = () => {
        console.log(this.state.volume > 0.99)
        if (this.state.volume > 0.99) {
            console.log('called again')
            clearInterval(this.state.timerVolumeChange);
            this.setState(() => ({
                timerVolumeChange: null,
                volume: 1
            }));
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
                        handleVolume={this.handleVolume}
                        handleVolumeMouseDown={this.handleVolumeMouseDown}
                        handleVolumeMouseUp={this.handleVolumeMouseUp}
                        />
                   </div>
               </div>
            </div>
        )
    }
}
