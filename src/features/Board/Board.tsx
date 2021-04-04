import React from "react";
import styles from "./Board.module.css";

export function Board({ playerCount, children }: React.PropsWithChildren<{ playerCount: number }>) {
  const getBoardVariant = (variant: string) => <div className={`${styles.board} ${variant}`}>{children}</div>;
  switch (playerCount) {
    case 2:
      return getBoardVariant(styles.twoPlayer);
    case 3:
      return getBoardVariant(styles.threePlayer);
    case 4:
      return getBoardVariant(styles.fourPlayer);
    default:
      throw new Error("Invalid number of players");
  }
}
