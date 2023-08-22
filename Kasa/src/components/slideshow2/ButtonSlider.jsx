import './buttonSlider.scss';

// function ButtonSlider({ handleNext, handlePrevious }) {
//     return (
//         <div className='buttonSlider'>
//             <button onClick={handlePrevious} className='buttonSlider__arrow --left'></button>
//             <button onClick={handleNext} className='buttonSlider__arrow --right'></button>
//         </div>
//     )
// }

function ButtonSlider({ next, previous }) {
    return (
        <div className='buttonSlider'>
            <button onClick={previous} className='buttonSlider__arrow --left'></button>
            <button onClick={next} className='buttonSlider__arrow --right'></button>
        </div>

    )
}


export default ButtonSlider