import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Player.module.css";
import { Card } from "components/Card/Card";
import { PlayerType } from "model";
import { useDispatch } from "react-redux";
import { setPlayedHand } from "features/Game/gameSlice";

export interface PlayerProps extends PlayerType {
  isUser: boolean;
}

export function Player(player: PlayerProps) {
  const dispatch = useDispatch();
  const [pickedCardIndex, setPickedCardIndex] = useState<undefined | number>();

  const { name, hand, score, turnToPlay, isUser } = player;

  useEffect(() => {
    if (!isUser && turnToPlay) {
      setPickedCardIndex(Math.floor(Math.random() * hand.length));
    }
    if (pickedCardIndex !== undefined) {
      dispatch(setPlayedHand({ player, card: hand[pickedCardIndex] }));
      setPickedCardIndex(undefined);
    }
  }, [dispatch, hand, isUser, pickedCardIndex, player, turnToPlay]);

  const nameClassName = cn({ "text-gold": isUser, "text-white": !isUser });
  const handClassName = cn(styles.hand, { [styles.userHand]: isUser, [styles.npcHand]: !isUser });
  const cardClassName = cn(styles.card, { [styles.userCard]: isUser, [styles.npcCard]: !isUser });

  return (
    <article className="text-center">
      <h2 className={nameClassName}>{name}</h2>
      <h3 className="text-white py-2">Score: {score}</h3>
      <section className={handClassName}>
        {hand.map((card, cardIndex) => (
          <Card
            key={card.code}
            className={cardClassName}
            cardIndex={cardIndex}
            disable={!isUser}
            onCardPick={() => setPickedCardIndex(cardIndex)}
            {...card}
          />
        ))}
      </section>
    </article>
  );
}
