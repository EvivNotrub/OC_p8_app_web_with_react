import './buttonSlider.scss';

function ButtonSlider({ delay, setIsDirection, setIsClicked, next, previous }) {
    return (
        <div className='buttonSlider'>
            <button type='button' 
                onClick={ () => {
                    setIsClicked(true)
                    setIsDirection('moveRight')
                    setTimeout(() => {
                        previous();
                        setIsClicked(false)
                    }, delay)
                }}
                className='buttonSlider__arrow --left'>
            </button>
            <button type='button'
                onClick={() => {
                    setIsClicked(true)
                    setIsDirection('moveLeft')
                    setTimeout(() => {
                        next();
                        setIsClicked(false)
                    }, delay)
                }}
                className='buttonSlider__arrow --right'>
            </button>
        </div>

    )
}


export default ButtonSlider