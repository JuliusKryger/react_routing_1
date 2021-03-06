import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import Home from './home';
import Header from './header';
import Products from './products';
import Company from './company';
import AddBook from './addbook';
import NoMatch from './nomatch';
import Details from './details';
import FindBook from './findbook';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch, 
  NavLink,
  Prompt
} from "react-router-dom";

/*Above is imports, below is our main function for the whole webpage*/

function App(props) {
  return (
<div>
  <Header />
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/products">
      <Products bookFacade={props.bookFacade}/>
    </Route>
    <Route path="/products/:id">
      <Details bookFacade={props.bookFacade}/>
    </Route>
    <Route path="/company">
      <Company />
    </Route>
    <Route path="/add-book">
      <AddBook bookFacade={props.bookFacade} />
    </Route>
    <Route path="/find-book">
      <FindBook bookFacade={props.bookFacade} />
    </Route>
    <Route>
      <NoMatch />
    </Route>
  </Switch>
</div>
  );
}

export default App;
