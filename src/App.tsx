import React, {useState} from 'react';
import './App.css';
import CardView from "./CardView/CardView";
import CardDeck from "./lib/CardDeck";
import Card from "./lib/Card";

function App() {
const [deckCards, setCards] = useState<Card[]>([]);

const getCards = () => {
  const cardDeck = new CardDeck();
  console.log(cardDeck);
  const cards: Card[] = cardDeck.getCards(5);
  console.log(cards);
  //setCards(deckCards.concat(cards.map(card => <CardView rank={card.rank} suit={card.suit}/>));
  setCards(cards);
};

return (
  <div className="App">
    {deckCards.map(card => <CardView rank={card.rank} suit={card.suit}/>)}
    <button onClick={getCards}>Раздать карты</button>
  </div>
);

}

export default App;
