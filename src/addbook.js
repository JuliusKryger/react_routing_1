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

export default function AddBook(props) {

    const [title, setTitle] = useState("")
    const [info, setInfo] = useState("")
  
    const newBook = {title: title, info: info}
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(newBook)
      props.bookFacade.addBook(newBook)
    }
    let [isBlocking, setIsBlocking] = useState(false);
  
    return (
      <div>
        <form onSubmit={handleSubmit} onSubmit={event => {
          event.preventDefault();
          event.target.reset();
          setIsBlocking(false);
        }}>
        <Prompt
          when={isBlocking}
          message={location =>
            `Are you sure you want to go to ${location.pathname}`
          }/>
          <input type="text" defaultValue={title} onChange={(e) => setTitle(e.target.value)} onChange={event => {setIsBlocking(event.target.value.length > 0);}}/>
          <input type="text" defaultValue={info} onChange={(e) => setInfo(e.target.value)} onChange={event => {setIsBlocking(event.target.value.length > 0);}}/>
          <input type="submit" />
        </form> 
      </div>
    );
  }