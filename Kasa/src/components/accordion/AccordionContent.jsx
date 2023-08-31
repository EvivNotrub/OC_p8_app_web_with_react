

function AccordionContent({title, datum}) {

    switch(title){
        case 'Équipements' : return (
                                <ul className="accordion2__content__data --acc-list">
                                    {datum.map((data, index) => <li key={data + index}>{data}</li>)}
                                </ul>
                             );
        default : return (<p className="accordion2__content__data">{datum}</p>);
    }
}

export default AccordionContent