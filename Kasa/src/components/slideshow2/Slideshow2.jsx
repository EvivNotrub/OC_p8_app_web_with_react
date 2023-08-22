import './slideshow2.scss';
import { useState } from "react";
import ButtonSlider from './ButtonSlider.jsx';
import { func } from 'prop-types';

function Slideshow2({ pictures }) {
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
        <section className='slideshow2'>
            { picturesLength > 1 && (                
                    <div className='slideshow2__arrows'>
                        <ButtonSlider next={() => updatePictures('next')} previous={() => updatePictures({direction: 'previous'})} />
                    </div> )
            }    
            { pictures.map((picture, index) => {
                    return (
                        index === previousPicture && <img key={picture.slice(-10, -4)} className='slideshow2__picture --previous' src={pictures[previousPicture]} alt={'image du logement numéro ' + ( previousPicture + 1)} />
                        || index === currentPicture && <img key={picture.slice(-10,-4)} className='slideshow2__picture' src={pictures[currentPicture]} alt={'image du logement numéro ' + ( currentPicture + 1)} />
                        || index === nextPicture && <img key={picture.slice(-10,-4)} className='slideshow2__picture --next' src={pictures[nextPicture]} alt={'image du logement numéro ' + ( nextPicture + 1)} />
                    )})   
            }
            
            
            { picturesLength > 1 && <div className='slideshow2__count'>{currentPicture + '/' + picturesLength}</div> }
        </section>

    )
}


export default Slideshow2
