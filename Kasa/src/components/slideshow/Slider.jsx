

function Slider({pictures, currentPicture, previousPicture, nextPicture}){
    return(
        pictures.map((picture, index) => {

            let position;
            switch (index){
                case currentPicture : position = " --current";
                break;
                case nextPicture : position = " --next";
                break;
                case previousPicture : position = " --previous";
                break;
                default : position = '';
            }

            return (
                <img  key={picture + index} className={'slideshow__picture' + position } id={index} src={picture} alt={'image du logement numéro ' + ( index + 1)} />
            )
        })
    )
}

export default Slider