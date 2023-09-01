import './slideshow.scss';
import { useState } from "react";
import ButtonSlider from './ButtonSlider.jsx';
import Slider from './Slider.jsx'


function Slideshow({ pictures }) {

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
        <section className='slideshow'>
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
              /> }  
            { picturesLength > 1 &&
                <div className='slideshow__count'>
                    {(currentPicture + 1) + '/' + picturesLength}
                </div> }
        </section>

    )
}


export default Slideshow
