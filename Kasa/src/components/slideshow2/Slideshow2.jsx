import './slideshow2.scss';
import { useState } from "react";

function Slideshow2({ pictures }) {
    const [currentPicture, setCurrentPicture] = useState(0);
    const picturesLength = pictures.length;

    function handleNext() {
        currentPicture === picturesLength - 1 ? setCurrentPicture(0) : setCurrentPicture(currentPicture + 1);
    }

    function handlePrevious() {
        currentPicture === 0 ? setCurrentPicture(picturesLength - 1) : setCurrentPicture(currentPicture - 1);
    }

    return (
        <section className='slideshow2'>
            { picturesLength > 1 && (                
                    <div className='slideshow2__arrows'>
                        <button onClick={handlePrevious} className='slideshow2__arrows__arrow --left'></button>
                        <button onClick={handleNext} className='slideshow2__arrows__arrow --right'></button>
                    </div> )}
            { pictures[currentPicture] && <img className='slideshow2__picture' src={pictures[currentPicture]} alt={'image du logement numéro ' + ( currentPicture + 1)} /> }
            { picturesLength > 1 && <div className='slideshow2__count'>{currentPicture + '/' + picturesLength}</div> }
        </section>

    )
}


export default Slideshow2
