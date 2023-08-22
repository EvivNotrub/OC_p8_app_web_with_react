import './buttonSlider.scss';


function ButtonSlider({ next, previous }) {
    return (
        <div className='buttonSlider'>
            <button type='button' 
                onClick={ () => { setTimeout(() => { previous() }, 1500)}}
                className='buttonSlider__arrow --left'>
            </button>
            <button type='button'
                onClick={() => { setTimeout(() => { next() }, 1500)}}
                className='buttonSlider__arrow --right'>
            </button>
        </div>

    )
}


export default ButtonSlider