import { Container } from "components/Container/Container";
import React from "react";

export function Loader() {
  return (
    <Container tall flex centered>
      <p className="text-white">Loading...</p>
    </Container>
  );
}
