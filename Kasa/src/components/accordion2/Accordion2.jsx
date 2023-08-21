import './accordion2.scss';
import arrow from '../../assets/arrow.png';

import React, { useState } from 'react';


function Accordion2({ type, datas}) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion2-container">
            <div className="accordion2">
                <div className="accordion2__header">
                    <h3 className="accordion2__header__title">{type}</h3>
                    <button onClick={() => setIsOpen(!isOpen)} className="accordion2__header__button" aria-expanded={isOpen ? 'true' : 'false'}>
                        <img className='accordion__button__arrow' src={arrow} alt="image of an arrow as button for accordion" />
                    </button>
                </div>
                <div className="accordion2__content">
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

export default Accordion2