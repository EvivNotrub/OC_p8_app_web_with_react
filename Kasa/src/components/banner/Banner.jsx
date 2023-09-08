import './banner.scss'

function Banner({ image, title }) {
    return (
        <h1 className='banner'>
            <img className={'banner__img' + (title ? ' title-dim' : '')} src={image} alt="photo d'un paysage" />
            {title && <span className='banner__title'>{title}</span>}
        </h1>
    )
    }

export default Banner