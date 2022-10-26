import React from 'react';

interface CardViewProps extends React.PropsWithChildren{
  rank: string;
  suit: string;
}

const suitFunction = (suit: string) => {
  if (suit === 'diams'){
    return '♦';
  } else if (suit === 'hearts') {
    return '♥';
  } else if (suit === 'clubs') {
    return '♣';
  } else if (suit === 'spades') {
    return '♠';
  }
};

const CardView: React.FC<CardViewProps> = (props) => {

  const cardClass = 'card rank-' + props.rank + ' ' + props.suit;

  return (
    <div className="playingCards faceImages">
       <span className={cardClass}>
         <span className="rank">{props.rank}</span>
         <span className="suit">{suitFunction(props.suit)}</span>
       </span>
    </div>
  );
};

export default CardView;