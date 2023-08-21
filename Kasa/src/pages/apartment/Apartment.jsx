import { useParams } from 'react-router-dom';
import Slideshow from '../../components/slideshow/Slideshow.jsx';
import Slideshow2 from '../../components/slideshow2/Slideshow2.jsx';
import Accordion from '../../components/accordion/Accordion.jsx';
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
            <Slideshow2 pictures={accommodation.pictures} />
            <section className='accommodation__infos'>
                <div className='accommodation__infos__relevant'>
                    <div className='accommodation__infos__relevant__nutshell'>
                        <h1>{apartName}</h1>
                        <div className='accommodation__infos__relevant__nutshell__location'>{accommodation.location}</div>
                        <Tags tags={accommodation.tags} />
                    </div>
                    <div className='accommodation__infos__relevant__about'>
                        <Owner host={ accommodation.host } />
                        <Rating rating={accommodation.rating} />
                    </div>
                </div>
                <div className='accommodation__infos__description'>
                    <Accordion type="Description" datas={accommodation.description}/>
                    <Accordion type="Équipements" datas={accommodation.equipments}/>
                </div>
            </section>
        </main>
    )
}

export default Apartment