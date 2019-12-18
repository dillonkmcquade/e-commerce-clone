import React from "react";
import "./App.styles.scss";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Navigation from "./components/navigation/navigation.component";

function App() {
  return (
    <div className="app">
      <Navigation className="nav" path={'/'} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
