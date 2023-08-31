import './accordion.scss';
import AccordionContent from './AccordionContent.jsx';
import arrow from '../../assets/arrow.png';
import { useState } from 'react';


function Accordion({ title, datum}) {

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="accordion2-container">
            <div className="accordion2">
                <div className="accordion2__header">
                    <h3 className="accordion2__header__title">{title}</h3>
                    <button
                        onClick={() => {
                                !isExpanded ? ( setIsExpanded(true)) : (setIsExpanded(false));
                            }}
                        className="accordion2__header__button"
                        aria-expanded={isExpanded ? 'true' : 'false'}
                    >
                        <img className='accordion2__header__button__arrow' src={arrow} alt="image of an arrow as button for accordion" />
                    </button>
                </div>
                <div className="accordion2__content" aria-expanded={isExpanded ? 'true' : 'false'} >
                    {<AccordionContent title={title} datum={datum} />}
                </div>
            </div>
        </div>
    )
}

export default Accordion