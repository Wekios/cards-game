import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { cardsAPI } from "services/cards-client";
import { PlayerType, CardDiscard } from "model";
import { cardValuesLookup, dealCards } from "config";
import { RootState } from "app/store";

export interface GameState {
  playerCount: number;
  players: PlayerType[];
  discard: CardDiscard[];
  status: "idle" | "loading" | "success" | "error";
  isGameOver: boolean;
}

const initialState: GameState = {
  playerCount: 0,
  players: [],
  discard: [],
  status: "idle",
  isGameOver: false,
};

export const startGame = createAsyncThunk("game/start", async (count: number, { getState }) => {
  const response = await cardsAPI.fetchNewDeck(count);
  return { cards: response.cards, count };
});

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setPlayedHand: (state, { payload }: PayloadAction<CardDiscard>) => {
      if (state.discard.length >= state.playerCount) return;

      const { player, card } = payload;

      state.discard.push({ player, card });

      const id = player.id;

      state.players[id].hand = state.players[id].hand.filter((prevCard) => prevCard.code !== card.code);

      state.players[id].turnToPlay = false;

      if (state.players[id + 1]) {
        state.players[id + 1].turnToPlay = true;
      } else {
        state.players[0].turnToPlay = true;
      }
    },
    setRoundWinner: (state, { payload }: PayloadAction<{ id: number; score: ReturnType<typeof cardValuesLookup> }>) => {
      const { id, score } = payload;
      state.players[id].score += score;
      state.discard = [];
      state.isGameOver = state.players[0].hand.length === 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(startGame.pending, () => {
      return { ...initialState, status: "loading" };
    });
    builder.addCase(startGame.fulfilled, (state, { payload }) => {
      state.playerCount = payload.count;
      state.players = dealCards(payload.cards, state.playerCount);
      state.status = "success";
    });
  },
});

export const selectGameState = (state: RootState) => state.game;

export const { setPlayedHand, setRoundWinner } = gameSlice.actions;

export default gameSlice.reducer;
