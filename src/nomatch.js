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

export default function NoMatch() {
    return (
      <div>
        <h2>No Match - 404 Page not found.</h2>
      </div>
    );
  }