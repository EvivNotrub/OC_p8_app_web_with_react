
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
        <div className='slideshow'>
            <ImageGallery items={photos} showThumbnails={false} autoPlay={false}/>
        </div>
    )
}

export default Slideshow