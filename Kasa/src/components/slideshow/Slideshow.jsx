import './slideshow.scss';
import { useState } from "react";
import ButtonSlider from './ButtonSlider.jsx';
import Slider from './Slider.jsx'
import FullscreenButton from './FullscreenButton.jsx';


function Slideshow({ pictures, isFullscreen, setIsFullscreen, classFullscreen }) {

    const [currentPicture, setCurrentPicture] = useState(0);
    const [previousPicture, setPreviousPicture] = useState(pictures.length - 1);
    const [nextPicture, setNextPicture] = useState(1);
    const picturesLength = pictures.length;

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
                    {<FullscreenButton isFullscreen={isFullscreen} setIsFullscreen={setIsFullscreen} />}
                </div>
            }
        </section>

    )
}


export default Slideshow
