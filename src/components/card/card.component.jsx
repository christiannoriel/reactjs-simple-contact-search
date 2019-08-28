import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img alt="contact" src={`https://robohash.org/${props.contact.id}?set=set4&size=150x250`} />
        <h1>{props.contact.name}</h1>
        <p>{props.contact.email}</p>
    </div>
); 