import './owner.scss';


function Owner({ host }) {
    const splitName = host.name.split(' ');

    return (
        <div className='owner'>
            <h3>
                {splitName.map((word) => {
                    return <span key={word}>{word}<br /></span>
                })}
            </h3>
            <img src={host.picture} alt={'picture of' + host.name} />
        </div>
    )
}

export default Owner