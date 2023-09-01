import { useParams, Navigate } from 'react-router-dom';
import Slideshow from '../../components/slideshow/Slideshow.jsx';
import Accordion from '../../components/accordion/Accordion.jsx';
import Owner from '../../components/owner/Owner.jsx';
import Rating from '../../components/rating/Rating.jsx';
import Tags from '../../components/tags/Tags.jsx';
import './apartment.scss'
import  accommodations  from '../../data/logements.json';
import { useEffect, useState } from 'react';



function Apartment() {
  const { apartId } = useParams();
  const [accommodation, setAccommodation] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const classFullscreen = isFullscreen ? ' --fullscreen' : ' --normalview';



  const myFunction = (_id) => {
    const myData = accommodations.find(({ id }) => id === _id);
    if (myData) {
      setAccommodation(myData);
      setLoading(false);
      document.title = myData.title;
    } else {
      setLoading(false)
    }
  };

  useEffect(() => {
    myFunction(apartId);
  }, [apartId]);

  if (isLoading && !accommodation) {
    return (
      <main className='accommodation'>
        <h1 className='accommodation__loading'>Chargement ...</h1>
      </main>
    )
  }

  if (!isLoading && !accommodation) {
    return (
      <Navigate to="/*"/>
    )
  }

  return (
          <main className={'accommodation' + classFullscreen}>
              <Slideshow
                pictures={accommodation.pictures}
                isFullscreen={isFullscreen}
                setIsFullscreen={setIsFullscreen}
                classFullscreen={classFullscreen}
              />
              <section className='accommodation__infos'>
                  <div className='accommodation__infos__relevant'>
                      <div className='accommodation__infos__relevant__nutshell'>
                          <h1>{accommodation.title}</h1>
                          <div className='accommodation__infos__relevant__nutshell__location'>{accommodation.location}</div>
                          <Tags tags={accommodation.tags} />
                      </div>
                      <div className='accommodation__infos__relevant__about'>
                          <Owner host={ accommodation.host } />
                          <Rating rating={accommodation.rating} />
                      </div>
                  </div>
                  <div className='accommodation__infos__description'>
                      <Accordion title='Description' datum={accommodation.description}/>
                      <Accordion title='Équipements' datum={accommodation.equipments}/>
                  </div>
              </section>
          </main>
      )
}

export default Apartment