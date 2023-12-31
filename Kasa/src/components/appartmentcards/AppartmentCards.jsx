import { Link } from 'react-router-dom';
import './appartmentCards.scss';


function AppartmentCards({accommodations}) {
    return (
            <section className='appartments'>
                {accommodations.map(({ id, title, pictures }) => 
                    <Link key={id} to={'/apartment/' + id}  className='appartments__card' >
                        <img src={pictures[0]} alt={'Picture of ' + title} className='appartments__card__img' />
                        <h3 className='appartments__card__title'>{title}</h3>
                    </Link>
                )}
            </section>

    )
}

export default AppartmentCards