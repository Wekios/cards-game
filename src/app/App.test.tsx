import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

test("renders start screen", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/select number of players/i)).toBeInTheDocument();

  const links = document.querySelectorAll("a");

  expect(links).toHaveLength(3);
});
