import React from "react";
import styles from "./Link.module.css";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";

export function Link({ className = "", ...rest }: RouterLinkProps) {
  className = `${styles.link} ${className}`;
  return <RouterLink className={className} {...rest} />;
}
