import React, { MouseEvent } from "react";
import { useHistory } from "react-router";
import styles from "./StartGameLinks.module.css";
import { Link } from "components/Link/Link";

export function GameLinks() {
  const history = useHistory();

  const handleRedirect = (e: MouseEvent<HTMLAnchorElement>, param: string) => {
    if (param === history.location.pathname) {
      e.preventDefault();
      history.push(`${param}?reload=true`);
    }
  };

  return (
    <>
      <h1 className={styles.heading}>Select number of players</h1>
      <Link onClick={(e) => handleRedirect(e, "/game/2")} to="/game/2">
        2
      </Link>
      <Link onClick={(e) => handleRedirect(e, "/game/3")} to="/game/3">
        3
      </Link>
      <Link onClick={(e) => handleRedirect(e, "/game/4")} to="/game/4">
        4
      </Link>
    </>
  );
}
