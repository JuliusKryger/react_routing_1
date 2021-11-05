import React, { useEffect, useState } from "react";
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

export default function Header() {
    return (
    <div>
      <ul className="header">
        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
        <li><NavLink activeClassName="active" to="/add-book">Add Book</NavLink></li>
        <li><NavLink activeClassName="active" to="/company">Company</NavLink></li>
      </ul>
    </div>
    );
  }