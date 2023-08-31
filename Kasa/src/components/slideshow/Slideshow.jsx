import './slideshow.scss';
import { useState } from "react";
import ButtonSlider from './ButtonSlider.jsx';


function Slideshow({ pictures }) {

    const [isDirection, setIsDirection] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const delay = 305; // delay in ms to wait for the transition to end - match with transition in scss line 26 & 30.
    // carefull: too long and the user will have to wait to click again.

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
                    <div className='slideshow__arrows'>
                        <ButtonSlider
                            delay={delay}
                            setIsDirection={setIsDirection}
                            setIsClicked={setIsClicked}
                            next={() => { updatePictures('next')}}
                            previous={() => { updatePictures({direction: 'previous'})}}
                        />
                    </div> )
            }    
            { pictures.map((picture, index) => {
                    return (
                        index === currentPicture && <img  key={picture + index} className={'slideshow__picture' + (isClicked ? (' --' + isDirection) : '')} src={pictures[currentPicture]} alt={'image du logement numéro ' + ( currentPicture + 1)} />
                        || index === previousPicture && <img key={picture + index} className={'slideshow__picture --previous' + (isClicked ? (' --' + isDirection) : '')} src={pictures[previousPicture]} alt={'image du logement numéro ' + ( previousPicture + 1)} />
                        || index === nextPicture && <img key={picture + index} className={'slideshow__picture --next' + (isClicked ? (' --' + isDirection) : '')} src={pictures[nextPicture]} alt={'image du logement numéro ' + ( nextPicture + 1)} />
                    )})   
            }  
            { picturesLength > 1 &&
                <div className='slideshow__count'>
                    {(isClicked ? (isDirection === 'moveLeft' ? (nextPicture + 1 ) : (previousPicture + 1)) : (currentPicture + 1)) + '/' + picturesLength}
                </div> }
        </section>

    )
}


export default Slideshow
