import './slideshow.scss';
import { useState } from "react";
import ButtonSlider from './ButtonSlider.jsx';


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
                    <div className='slideshow__arrows'>
                        <ButtonSlider
                            next={() => { updatePictures('next')}}
                            previous={() => { updatePictures({direction: 'previous'})}}
                        />
                    </div> )
            }    
            { pictures.map((picture, index) => {

                let position;
                switch (index){
                    case currentPicture : position = " --current";
                    break;
                    case nextPicture : position = " --next";
                    break;
                    case previousPicture : position = " --previous";
                    break;
                    default : position = '';
                }

                    return (
                        <img  key={picture + index} className={'slideshow__picture' + position } id={index} src={picture} alt={'image du logement numéro ' + ( index + 1)} />
                    )})   
            }  
            { picturesLength > 1 &&
                <div className='slideshow__count'>
                    {(currentPicture + 1) + '/' + picturesLength}
                </div> }
        </section>

    )
}


export default Slideshow
