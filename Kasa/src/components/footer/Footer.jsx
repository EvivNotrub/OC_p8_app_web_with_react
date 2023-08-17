import { Link } from 'react-router-dom'
import './footer.scss'

function Footer() {
    return (
        <div>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A propos</Link>
            </nav>
            <ul>
                <li>Mi Kasa es su Casa </li>
                <li>Rules</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Footer