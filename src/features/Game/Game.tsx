import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { determineRoundWinner } from "config";
import { GameOver } from "./GameOver";
import { DiscardPile } from "./DiscardPile";
import { Board } from "features/Board/Board";
import { Player } from "features/Player/Player";
import { Loader } from "components/Loader/Loader";
import { startGame, setRoundWinner, selectGameState } from "./gameSlice";

interface GameProps {
  playerCount: number;
  isReloaded: boolean;
}

export function Game({ playerCount, isReloaded }: GameProps) {
  const dispatch = useDispatch();
  const { players, status, discard, isGameOver } = useSelector(selectGameState);

  useEffect(() => {
    dispatch(startGame(playerCount));
  }, [dispatch, playerCount, isReloaded]);

  // Determine round winner
  useEffect(() => {
    if (discard.length !== playerCount) return;

    const winner = determineRoundWinner(discard);
    const timer = setTimeout(() => {
      dispatch(setRoundWinner({ id: winner.id, score: winner.scoreSum }));
    }, 1000);

    return () => clearTimeout(timer);
  }, [discard, playerCount, dispatch]);

  const isLoading = status === "loading" || status === "idle";
  const isError = status === "error";
  let content;

  if (isLoading) content = <Loader />;
  else if (isError) content = <p>Something went wrong...</p>;
  else {
    const renderPlayers = players.map((player) => {
      const isUser = player.id === 0;
      return <Player key={player.id} isUser={isUser} {...player} />;
    });

    content = (
      <Board playerCount={players.length}>
        {renderPlayers}
        {isGameOver ? <GameOver players={players} /> : <DiscardPile discard={discard} />}
      </Board>
    );
  }

  return <>{content}</>;
}
