import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { isInPlayerCountRange, MAX_PLAYER_COUNT } from "config";
import { Game } from "features/Game/Game";
import { GameLinks } from "features/Game/StartGameLinks";
import { Container } from "components/Container/Container";

interface ParamTypes {
  playerCount: string;
}

export function GameScreen({ match, location, history }: RouteComponentProps<ParamTypes>) {
  const playerCount = parseInt(match.params.playerCount);
  const isReloaded = !!new URLSearchParams(location.search).get("reload");

  const invalidPlayerCount = (
    <Container width="narrow" tall flex centered direction="column">
      <GameLinks />
      <p className="text-error">
        Looks like you tried to play with
        {playerCount > MAX_PLAYER_COUNT ? " more " : " less "}
        players than allowed.
      </p>
    </Container>
  );

  useEffect(() => {
    if (isReloaded) {
      history.replace({
        search: "",
      });
    }
    return () => {};
  }, [isReloaded, history]);

  return isInPlayerCountRange(playerCount) ? (
    <Game playerCount={playerCount} isReloaded={isReloaded} />
  ) : (
    invalidPlayerCount
  );
}
