import React from "react";
import styles from "./Container.module.css";
import cn from "classnames";

export interface ContainerProps<As extends React.ElementType = React.ElementType> {
  as?: As;
  tall?: boolean;
  flex?: boolean;
  centered?: boolean;
  className?: string;
  width?: "wide" | "regular" | "narrow";
  direction?: "row" | "column";
  padded?: boolean;
}

export function Container({
  as: Tag = "div",
  className = "",
  flex,
  width = "regular",
  direction = "row",
  tall,
  centered,
  padded,
  ...rest
}: React.PropsWithChildren<ContainerProps>) {
  className = cn(
    styles.container,
    styles[width],
    styles[direction],
    {
      [styles.flex]: flex,
      [styles.centered]: centered,
      [styles.tall]: tall,
      [styles.padded]: padded,
    },
    className
  );

  return <Tag {...{ ...rest, className }} />;
}
