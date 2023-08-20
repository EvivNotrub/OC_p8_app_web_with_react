
import './slideshow.scss';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";


function Slideshow({ pictures }) {
    const photos = pictures.map((picture) => {
        return {
            original: picture,
            thumbnail: picture,
        }
    })

    return (
        <section className='slideshow'>
            <ImageGallery items={photos} showBullets={true} showThumbnails={false} autoPlay={false}/>
        </section>
    )
}

export default Slideshow