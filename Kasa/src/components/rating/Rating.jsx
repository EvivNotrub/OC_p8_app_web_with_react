import './rating.scss'

function Rating() {
    return (
        <div className='rating'>
            <div className='rating__stars'>
                <div className='rating__stars__star'></div>
            </div>
            <div className='rating__comments'>
                <div className='rating__comments__number'>Rating</div>
                <div className='rating__comments__text'>reviews</div>
            </div>
        </div>
    )
}

export default Rating
