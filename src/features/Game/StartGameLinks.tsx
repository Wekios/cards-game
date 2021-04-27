import React from "react";
import { Link } from "components/Link/Link";
import styles from "./StartGameLinks.module.css";

export function GameLinks() {
  return (
    <>
      <h1 className={styles.heading}>Select number of players</h1>
      <Link to="/game/2">2</Link>
      <Link to="/game/3">3</Link>
      <Link to="/game/4">4</Link>
    </>
  );
}
