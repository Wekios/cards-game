import { PlayerType } from "model";

export function createPlayer(defaults: Partial<PlayerType>): PlayerType {
  const { id = 0, name = "test", hand = [], turnToPlay = false, score = 0 } = defaults;
  return { id, name, hand, turnToPlay, score } as PlayerType;
}

export function createPlayers([a, b, c, d]: number[]) {
  const test = Array.from({ length: 4 }, (_a, index) => {
    return createPlayer({ id: index, score: index * 10 });
  });

  const reorderedTest = [...test];

  reorderedTest[a - 1] = test[0];
  reorderedTest[b - 1] = test[1];
  reorderedTest[c - 1] = test[2];
  reorderedTest[d - 1] = test[3];

  return reorderedTest;
}

export const test = createPlayers([4, 2, 3, 1]);
