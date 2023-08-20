import './tags.scss'

function Tags({ tags }) {
    return (
        <div className='tags'>
            {tags.map((tag, index) => <span key={index + tag} className='tags__tag'>{tag}</span>)}
        </div>
    )
}

export default Tags