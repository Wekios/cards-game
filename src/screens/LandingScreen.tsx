import React from "react";
import { GameLinks } from "features/Game/StartGameLinks";
import { Container } from "components/Container/Container";

export function LandingScreen() {
  return (
    <Container width="narrow" tall flex centered direction="column">
      <GameLinks />
    </Container>
  );
}
