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
                    <svg className='svg' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                        {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                    </svg>
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
                <svg className='svg' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                    {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                </svg>            
            </button>
        </div>
    )
}

export default ButtonSlider