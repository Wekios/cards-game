import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LandingScreen } from "screens/LandingScreen";
import { GameScreen } from "screens/GameScreen";
import { Container } from "components/Container/Container";
import { GameLinks } from "features/Game/StartGameLinks";

function App() {
  return (
    <main className="app">
      <Router>
        <Switch>
          <Route path="/game/:playerCount" component={GameScreen} />
          <Route path="/" component={LandingScreen} exact />
          <Route path="*" component={NotFoundScreen} />
        </Switch>
      </Router>
    </main>
  );
}

function NotFoundScreen() {
  return (
    <Container flex tall centered direction="column">
      <p className="text-white">Page not found... Try clicking on one of these instead</p>
      <GameLinks />
    </Container>
  );
}

export default App;
