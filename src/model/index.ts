export type CardType = {
  code: string;
  image: string;
  suit: string;
  value: string;
};

export type PlayerType = {
  id: number;
  name: string;
  hand: CardType[];
  turnToPlay: boolean;
  score: number;
};

export type NewDeckResponse = {
  deck_id: string;
  success: boolean;
  remaining: number;
  cards: CardType[];
};

export type CardDiscard = {
  player: PlayerType;
  card: CardType;
};
