import './slideshow.scss';
import { useState } from "react";
import ButtonSlider from './ButtonSlider.jsx';
import Slider from './Slider.jsx'


function Slideshow({ pictures }) {

    const [currentPicture, setCurrentPicture] = useState(0);
    const [previousPicture, setPreviousPicture] = useState(pictures.length - 1);
    const [nextPicture, setNextPicture] = useState(1);
    const picturesLength = pictures.length;
    const [isFullscreen, setIsFullscreen] = useState(false);
    const classFullscreen = isFullscreen ? ' --fullscreen' : ' --normalview';

    function updatePictures(direction) {
        if (direction === 'next') {
            setPreviousPicture(currentPicture);
            setCurrentPicture(nextPicture);
            setNextPicture(nextPicture + 1 === picturesLength ? 0 : nextPicture + 1);
        } else {
            setPreviousPicture(previousPicture - 1 === -1 ? picturesLength - 1 : previousPicture - 1);
            setCurrentPicture(previousPicture);
            setNextPicture(currentPicture);
        }
    }

    return (
        <section className={ 'slideshow' + classFullscreen}>
            { picturesLength > 1 && (
                <ButtonSlider
                    next={() => { updatePictures('next')}}
                    previous={() => { updatePictures({direction: 'previous'})}}
                />) }    
            { <Slider
                pictures={pictures}
                currentPicture={currentPicture}
                previousPicture={previousPicture}
                nextPicture={nextPicture}
                classFullscreen={classFullscreen}
              /> }  
            {   <div className='slideshow__footer'>
                    <div className='slideshow__footer__ghost'></div>
                    { picturesLength > 1 &&  (
                        <div className='slideshow__footer__count'>
                            {(currentPicture + 1) + '/' + picturesLength}
                        </div>
                    )}
                    <button 
                        className='slideshow__footer__viewbutton'
                        onClick={() => {
                            isFullscreen ? setIsFullscreen(false) : setIsFullscreen(true)
                        }}
                    >
                        { isFullscreen? (
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                {/* ! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                <path d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                            {/* ! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  */}
                            <path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"/>
                            </svg>
                        )}
                    </button>
                </div>
            }
        </section>

    )
}


export default Slideshow
