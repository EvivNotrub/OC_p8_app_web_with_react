import './home.scss';
import Banner from '../../components/banner/Banner.jsx';
import AppartmentCards from '../../components/appartmentcards/AppartmentCard.jsx';

function Home() {
  return (
    <main className='home__main'>
      <Banner />
      <AppartmentCards />
    </main>
  )
}

export default Home
