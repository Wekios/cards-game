import React from "react";
import { PlayerType } from "model";
import { GameLinks } from "./StartGameLinks";
import { Container } from "components/Container/Container";
import { determineGameWinner } from "config";

function useFormatScoreText(winners: PlayerType[]) {
  const scoreText =
    winners.length > 1
      ? `Tie! First place shared by ${winners
          .map((winner, idx) => `${winner.name}${idx === winners.length - 1 ? "." : " and "}`)
          .join("")}`
      : `${winners[0].name} Won!`;

  return scoreText;
}

export function GameOver({ players }: { players: PlayerType[] }) {
  const winners = determineGameWinner(players);
  const endScoreText = useFormatScoreText(winners);

  return (
    <Container flex direction="column">
      <h3 className="text-white">{endScoreText} Play again?</h3>
      <GameLinks />
    </Container>
  );
}
