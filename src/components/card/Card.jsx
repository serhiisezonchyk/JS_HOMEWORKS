import React from 'react';
import CardBody from './CardBody';
import CardTitle from './CardTitle';
import CardText from './CardText';

const CardComponent = ({ children }) => {
  return <div className='card'>{children}</div>;
};
const Card = Object.assign(CardComponent, {
  Body: CardBody,
  Title: CardTitle,
  Text: CardText,
});

export default Card;
