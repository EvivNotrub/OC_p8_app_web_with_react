import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './footer.scss'

function Footer() {
    return (
        <footer className='footer-kasa'>
            <Link className='footer-kasa__link' to="/">
                <img src={logo} alt="logo Kasa" className='footer-kasa__link__logo' />
            </Link>
            <p className='footer-kasa__copyright'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer