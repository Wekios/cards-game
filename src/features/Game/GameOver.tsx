import React from "react";
import { PlayerType } from "model";
import { Link } from "components/Link/Link";
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
      <h3 className="text-white pb-2">{endScoreText} Play again?</h3>
      <Link to="/">Start Screen</Link>
      <Link to="/rule-book">Rule Book</Link>
    </Container>
  );
}
