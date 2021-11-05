import React, { useEffect, useState } from "react";
import Details from './details';
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

export default function Products(props) {
    let books = props.bookFacade.getBooks()
    return (
      <div>
        <h2>We've {books.length} number of books</h2>
        <ul>{books.map((book => <li key={book.id}> {book.title} <NavLink to={`/products/${book.id}`}> <button id={book.id}>details</button></NavLink>   </li>))}</ul>
      </div>
    );
  }