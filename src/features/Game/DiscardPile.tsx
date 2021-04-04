import React from "react";
import { CardDiscard } from "model";
import { CardFace } from "components/Card/Card";

export interface DiscardPileProps {
  discard: CardDiscard[];
}

export function DiscardPile({ discard }: DiscardPileProps) {
  return (
    <section>
      <h4 className="text-info text-center pb-2">Discard pile:</h4>
      <ul className="flex">
        {discard.map(({ player, card }) => (
          <li key={card.code}>
            <CardFace src={card.image} />
            <h5 className="text-white">{player.name}</h5>
          </li>
        ))}
      </ul>
    </section>
  );
}
