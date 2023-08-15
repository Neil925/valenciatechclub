import React, { ReactNode } from 'react';
import './MemberAccordian.scss';
import { Member } from '../../utilities/types';
import MemberCard from '../memberCard/MemberCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AccordianClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    var content = event.currentTarget.parentElement?.querySelector('.accordian-content') as HTMLElement;
    var canPlus = event.currentTarget.parentElement?.querySelector('.canPlus') as HTMLElement;

    if (content.classList.contains('accordian-expand')) {
        content.classList.add('accordian-contract');
        content.classList.remove('accordian-expand');

        canPlus.style.transform = "rotate(90deg)";

        return;
    }

    content.classList.add('accordian-expand');
    content.classList.remove('accordian-contract');
    canPlus.style.transform = "rotate(0deg)";
}

export default function MemberAccordian(props: {
    title: string, description?: string, list: Member[]
    images: { [key: string]: string }, children?: ReactNode
}) {
    return (
        <div className='member-accordian'>
            <button className='accordian-button flex-left' onClick={(event) => AccordianClick(event)}>
                <h2><b>{props.title}</b></h2>
                <FontAwesomeIcon icon={['fas', 'minus']} className='accordian-icon' />
                <FontAwesomeIcon icon={['fas', 'minus']} className='accordian-icon canPlus' />
            </button>
            <div className="accordian-content accordian-expand">
                {
                    props.list.map((member, index) => (
                        <div key={index} className="grid-item">
                            {props.images[member.name] &&
                                (<MemberCard member={member} imageUrl={props.images[member.name]} />)}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
