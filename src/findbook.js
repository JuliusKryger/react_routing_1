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

export default function FindBook (props) {

  const [id, setId] = useState(0);
  const [book, setBook] = useState({ id: 0, title: "", info: "" });
  console.log(book)

  const books = props.bookFacade.getBooks()

  const handleInput = (evt) => {
    const target = evt.target
    setId(parseInt(target.value))
}

const handleFind = () => {
  const foundBook = books.find(b => b.id === id)
  setBook(foundBook)
}

return (
<div>

<h1>Find Book</h1>
<input type="text" onChange={handleInput}></input>
<button onClick={handleFind}>Find book</button>

<h3>Book found with id: {book.id}</h3>
<h3>Book Title: {book.title}</h3>
<h3>Book Info: {book.info}</h3>

</div>
);
}