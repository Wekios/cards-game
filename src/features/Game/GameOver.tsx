import React from "react";
import { PlayerType } from "model";
import { GameLinks } from "./StartGameLinks";
import { Container } from "components/Container/Container";

export function GameOver({ players }: { players: PlayerType[] }) {
  const winner = players.reduce((prev, current) => (prev.score > current.score ? prev : current));
  return (
    <Container flex direction="column">
      <h3 className="text-white">{winner.name} Won! Play again?</h3>
      <GameLinks />
    </Container>
  );
}
