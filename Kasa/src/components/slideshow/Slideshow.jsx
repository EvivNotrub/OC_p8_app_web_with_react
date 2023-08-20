
import './slideshow.scss'

function Slideshow({ pictures }) {
    return (
        <div className='slideshow'>
            <img src={pictures[0]} className='slideshow__cover' />
        </div>
    )
}

export default Slideshow