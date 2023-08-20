import { useParams } from 'react-router-dom';
import Slideshow from '../../components/slideshow/Slideshow.jsx';
import Accordion from '../../components/accordion/Accordion.jsx';
import Owner from '../../components/owner/Owner.jsx';
import Rating from '../../components/rating/Rating.jsx';
import './apartment.scss'

function Apartment() {
const { apartName } = useParams();
const datas = useParams();
console.log(datas);
const host = 'John Doe';
// const  description  = { data.description }
    return (
        <main className='accommodation'>
            <Slideshow />
            <section className='accommodation__infos'>
                <div className='accommodation__infos__relevant'>
                    <div className='accommodation__infos__relevant__nutshell'>
                        <h1>{apartName}</h1>
                        <div>Location</div>
                        <div>Superhost</div>
                    </div>
                    <div className='accommodation__infos__relevant__about'>
                        <Owner host={ host } />
                        <Rating />
                    </div>
                </div>
                <div className='accommodation__infos__description'>
                    {/* <p>{data.description}</p> */}
                    <Accordion />
                </div>
            </section>
        </main>
    )
}

export default Apartment