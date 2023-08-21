import './home.scss';
import Banner from '../../components/banner/Banner.jsx';
import AppartmentCards from '../../components/appartmentcards/AppartmentCards.jsx';
import banner from '../../assets/banner.jpg';

function Home() {
  const title = 'Chez vous, partout et ailleurs';
  return (
    <main className='home__main'>
      <Banner image={banner} title={title} />
      <AppartmentCards />
    </main>
  )
}

export default Home
