import './owner.scss';


function Owner({ host }) {
    return (
        <div className='owner'>
            {console.log(host)}
            <h3>{host.name}</h3>
            <img src={host.picture} alt={'picture of' + host.name} />
        </div>
    )
}

export default Owner