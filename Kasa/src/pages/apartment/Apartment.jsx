import { useParams } from 'react-router-dom';
import Slideshow from '../../components/slideshow/Slideshow.jsx';
import AccordionComponent from '../../components/accordion/Accordion.jsx';
import Owner from '../../components/owner/Owner.jsx';
import Rating from '../../components/rating/Rating.jsx';
import Tags from '../../components/tags/Tags.jsx';
import './apartment.scss'
import  accommodations  from '../../data/logements.json';

function Apartment() {
const { apartName } = useParams();

const accommodation = accommodations.find(({ title }) => title === apartName);
return (
        <main className='accommodation'>
            <Slideshow pictures={accommodation.pictures} />
            <section className='accommodation__infos'>
                <div className='accommodation__infos__relevant'>
                    <div className='accommodation__infos__relevant__nutshell'>
                        <h1>{apartName}</h1>
                        <div>{accommodation.location}</div>
                        <Tags tags={accommodation.tags} />
                    </div>
                    <div className='accommodation__infos__relevant__about'>
                        <Owner host={ accommodation.host } />
                        <Rating rating={accommodation.rating} />
                    </div>
                </div>
                <div className='accommodation__infos__description'>
                    <AccordionComponent type="Description" datas={accommodation.description}/>
                    <AccordionComponent type="Équipements" datas={accommodation.equipments}/>
                </div>
            </section>
        </main>
    )
}

export default Apartment