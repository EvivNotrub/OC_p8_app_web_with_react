import './home.scss';
import Banner from '../../components/banner/Banner.jsx';
import AppartmentCards from '../../components/appartmentcards/AppartmentCards.jsx';
import banner from '../../assets/banner.jpg';
import  accommodations  from '../../data/logements.json';


function Home() {
  const title = 'Chez vous, partout et ailleurs';
  document.title = "Kasa " + title;

  return (
    <main className='home__main'>
      <Banner image={banner} title={title} />
      <AppartmentCards accommodations={accommodations} />
    </main>
  )
}

export default Home
