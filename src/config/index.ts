import { CardDiscard, CardType, PlayerType } from "model";

/**
 * Names mapped to the key, user is always key: 0
 */
export const playersNames: {
  [key: number]: string;
} = {
  0: "You",
  1: "Mr 2",
  2: "Mister 3",
  3: "Mister 4",
};

/**
 * Number of cards per game
 */
export const cardsCount: number = 10;

export const cardValuesLookup = (card: CardType["value"]) => {
  switch (card) {
    case "KING":
      return 14;
    case "QUEEN":
      return 13;
    case "JACK":
      return 12;
    case "ACE":
      return 1;
    default:
      return parseInt(card);
  }
};

export const MIN_PLAYER_COUNT = 2;
export const MAX_PLAYER_COUNT = 4;
/**
 * helper fn to check if number of players is valid
 */
export const isInPlayerCountRange = (num: number) => num >= MIN_PLAYER_COUNT && num <= MAX_PLAYER_COUNT;

/**
 * Simple algorithm: who had the highest||same card last takes the lead
 * @param discard played cards during the round
 * @returns round winner
 */
export const determineRoundWinner = (discard: CardDiscard[]) => {
  const formattedDiscard = discard.map((dis) => ({
    ...dis,
    cardValue: cardValuesLookup(dis.card.value),
  }));

  return formattedDiscard.reduce(
    (acc, cur) => {
      if (acc.cardValue <= cur.cardValue) {
        acc.id = cur.player.id;
        acc.cardValue = cur.cardValue;
      }
      acc.scoreSum += cur.cardValue;
      return acc;
    },
    { id: 0, scoreSum: 0, cardValue: 0 }
  );
};

/**
 * Simulates real life deal where each player gets dealt one card per draw.
 * Perhaps unnecessary because cards are already shuffled but I thought it was nice to implement,
 * and using remainder (%) operator makes me feel cool. (also we can use the same deck always)
 * @param deck fresh deck of cards
 * @param count number of players
 * @returns Array of players
 */
export function dealCards(deck: CardType[], count: number): PlayerType[] {
  const players: PlayerType[] = [];

  for (let i = 0; i < deck.length; i++) {
    const playerIndex = i % count;
    const card = deck[i];
    if (!players[playerIndex]) {
      players[playerIndex] = {
        id: playerIndex,
        name: playersNames[playerIndex],
        hand: [card],
        turnToPlay: false,
        score: 0,
      };
    } else {
      players[playerIndex].hand.push(card);
    }
  }
  return players;
}
