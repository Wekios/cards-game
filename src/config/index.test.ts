import { isInPlayerCountRange, MAX_PLAYER_COUNT, MIN_PLAYER_COUNT } from "./index";

test("checks player count", () => {
  expect(isInPlayerCountRange(MIN_PLAYER_COUNT - 1)).toBe(false);
  expect(isInPlayerCountRange(MAX_PLAYER_COUNT + 1)).toBe(false);
  expect(isInPlayerCountRange(MIN_PLAYER_COUNT)).toBe(true);
});
