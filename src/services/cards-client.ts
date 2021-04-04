import { HttpClient } from "./http-client-base";
import { NewDeckResponse } from "model";
import { cardsCount } from "config";

const BASE_URL = "https://deckofcardsapi.com/api/deck";
const NEW_DECK_URL = "/new/draw/?count=";

export class CardsAPI extends HttpClient {
  public constructor() {
    super(BASE_URL);
  }

  fetchNewDeck = (playerCount: number) =>
    this.instance.get<NewDeckResponse>(`${NEW_DECK_URL}${playerCount * cardsCount}`);
}

export const cardsAPI = new CardsAPI();
