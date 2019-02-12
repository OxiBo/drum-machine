console.log("works")

// helper function to remove class from drum-pads
    export const removeClass = (elementListened, propertyName, classToRemoveName) => {

        elementListened.forEach(pad => pad.addEventListener('transitionend', function(e) {

            if (e.propertyName !== propertyName) return; // skip if it is not transform
            this.classList.remove(classToRemoveName)
        }))
    }


    //   // helper function to remove class from drum-pads
    // removeClass = () => {
    //     const drumPadElements = document.querySelectorAll(".drum-pad");
    //     drumPadElements.forEach(pad => pad.addEventListener('transitionend', function(e) {

    //         if (e.propertyName !== "transform") return; // skip if it is not transform
    //         this.classList.remove('playingPad')
    //     }))
    // }
