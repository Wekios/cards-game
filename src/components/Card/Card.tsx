import React from "react";
import { CardType } from "model";

export interface CardProps extends CardType {
  className?: string;
  cardIndex: number;
  onCardPick: () => void;
  disable?: boolean;
}

export function Card({ className, image, suit, value, onCardPick, disable }: CardProps) {
  return (
    <button className={className} onClick={onCardPick} disabled={disable}>
      <CardFace src={image} alt={`${suit} ${value}`} />
    </button>
  );
}

export interface CardFaceProps {
  className?: string;
  src: string;
  alt?: string;
}

export function CardFace({ alt = "", ...rest }: CardFaceProps) {
  return <img width="100px" alt={alt} {...rest} />;
}
