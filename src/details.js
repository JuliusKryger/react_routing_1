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

export default function Details (props) {

    const obj = useParams()
    console.log(obj)
    const id = parseInt(obj.id)
    console.log(id)
    const books = props.bookFacade.getBooks()
    console.log(books)
    const book = books.find(b => b.id === parseInt(id))
    console.log(book)


    return (
        <div>
            <li key={book.id}> Book Title: {book.title} </li>
            <li key={book.id}> Book ID: {book.id} </li>
            <li key={book.id}> Book Info: {book.info} </li>
        </div>
    );
}