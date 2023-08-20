import './accordion.scss';
import {
    Accordion ,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import arrow from '../../assets/arrow.png';


function AccordionComponent({ type, datas}) {
    return (
        <Accordion allowZeroExpanded= 'true'>
            <AccordionItem className='accordion'>
                <AccordionItemHeading className='accordion__heading'>
                    {type}
                    <AccordionItemButton className='accordion__button'>
                        <img className='accordion__button__arrow' src={arrow} alt="image of an arrow as button for accordion" />
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='accordion__content'>
                    {type === "Description" ? <p>{datas}</p> : (<ul>
                        {datas.map((data, index) => <li key={data + index}>{data}</li>)}
                    </ul>)}
                </AccordionItemPanel>
            </AccordionItem>            
        </Accordion>
    )
}

export default AccordionComponent