import React from "react";
import { Link } from "react-router-dom";
import { Container } from "components/Container/Container";
import styles from "./RuleBook.module.css";
import cn from "classnames";

export function RuleBook() {
  return (
    <Container
      flex
      centered
      tall
      padded
      width="regular"
      direction="column"
      as="section"
      className="bg-white-text-readable pb-2"
    >
      <code>
        <h1 className="text-gold text-center pb-2">Rule Book</h1>
        <ul className="text-white">
          <li>2 to 4 players, one controlled by you!</li>
          <li>Standard deck of 52 cards</li>
          <li>Initial deal is 10 cards per players</li>
          <li>Human player always plays first</li>
          <li>Afterwards order of players that start the round is clockwise</li>
          <li>Computer player plays randomly (there's room for improvement here)</li>
          <li>
            Every player picks a card and the highest card wins and takes all of the cards that other players discarded
          </li>
          <li>Values of cards are A=1, 2 to 10 = number value on the card, J=12, Q=13, K=14</li>
          <li>
            If there are cards of equal value on the table the last player that threw <strong>that</strong> card takes
            all
          </li>
          <li>Game ends when all of the players have played their cards</li>
          <li>Player with the highest score (sum of all the cards he took previously) wins</li>
          <li>In case of a tie the winning place is shared</li>
        </ul>
      </code>
      <Link className={cn(styles.startLink, "text-white")} to="/">
        Start Screen
      </Link>
    </Container>
  );
}
