import './accordion.scss';
import arrow from '../../assets/arrow.png';
import { useState } from 'react';


function Accordion({ type, datas}) {

    const [isOpen, setIsOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const delay = 270;

    return (
        <div className="accordion2-container">
            <div className="accordion2">
                <div className="accordion2__header">
                    <h3 className="accordion2__header__title">{type}</h3>
                    <button
                        onClick={() => {
                                !isOpen ? (setIsOpen(true), setIsExpanded(true)) : (setIsExpanded(false),(setTimeout(() => setIsOpen(false), delay)));
                            }
                        }
                        className="accordion2__header__button"
                        aria-expanded={isExpanded ? 'true' : 'false'}
                    >
                        <img className='accordion2__header__button__arrow' src={arrow} alt="image of an arrow as button for accordion" />
                    </button>
                </div>
                <div className="accordion2__content" aria-expanded={isExpanded ? 'true' : 'false'} >
                    {
                        isOpen && (
                            type === "Équipements" ? (
                                <ul className="accordion2__content__data --acc-list">
                                    {datas.map((data, index) => <li key={data + index}>{data}</li>)}
                                </ul>) : <p className="accordion2__content__data">{datas}</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Accordion