
import './about.scss';
import Banner from '../../components/banner/Banner.jsx';
import banner from '../../assets/banner2.jpg';
import AccordionComponent from '../../components/accordion/Accordion.jsx';
import about from '../../data/aboutKasa.json';

function About() {
    document.title = "Kasa A propos";
    
    return (
        <main className='about__main'>
            <Banner image={banner}/>
            <div className='about__main__moto'>
                {about.map(({id, title, description}) => 
                    (<AccordionComponent key={id} title={title} datum={description}/>)
                )}
            </div>
        </main>
    )
}

export default About