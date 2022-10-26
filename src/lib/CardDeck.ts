import Card from "./Card";

class CardDeck {
  private suits: string[] = ['diams','hearts','clubs','spades']
  private ranks: string[] = ['2','3','4','5','6','7','8','9','10','j','q','k','a']

  public cards: Card[] = [];

  constructor() {
    let key: number = 0;
    for (const suit of this.suits) {
      for (const rank of this.ranks) {
        key++;
        const card = new Card(key,rank,suit);

        this.cards.push(card);
      }
    }
  }

  public getCard() {
    const randNumber = Math.floor(Math.random() * this.cards.length);
    return this.cards[randNumber];
  }

  public getCards(cards: number) {
    const fiveCards: Card[] = [];
    for (let i=0; i < cards; i++) {
      const randNumber = Math.floor(Math.random() * this.cards.length);
      fiveCards.push(this.cards[randNumber]);
      this.cards.splice(1, randNumber);
    }
    return fiveCards
  }
}

export default CardDeck;