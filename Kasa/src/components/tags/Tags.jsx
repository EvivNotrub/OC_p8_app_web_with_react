import './tags.scss'

function Tags({ tags }) {
    return (
        <div className='tags'>
            {tags.map((tag, index) => <div key={index + tag} className='tags__tag'>{tag}</div>)}
        </div>
    )
}

export default Tags