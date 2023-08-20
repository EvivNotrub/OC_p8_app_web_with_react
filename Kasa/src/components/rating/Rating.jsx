import './rating.scss';
import star from '../../assets/star.svg';

function Rating({ rating }) {
    const range = [1, 2, 3, 4, 5];
    return (
        <div className='rating'>
            {range.map((rangeElem) =>
				rating >= rangeElem ? (
					<img key={rangeElem.toString()} className='rating__star-red' src={star}/>
				) : <img key={rangeElem.toString()} className='rating__star-grey' src={star}/>
			)}
        </div>
    )
}

export default Rating
