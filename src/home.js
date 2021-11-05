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

export default function Home() {
    return (
      <div>
        <h2>This is my super awesome homepage</h2>
      </div>
    );
  }